import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { AiOutlineDown } from "react-icons/ai";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

interface ShoppingListProps {
  currentUser: any;
}

interface Ingredient {
  checked: boolean;
  ingredient: string;
  measure: string;
}

interface Recipe {
  ingredients: Ingredient[];
  name: string;
  timestamp: { seconds: number; nanoseconds: number };
}

const ShoppingList: React.FC<ShoppingListProps> = ({ currentUser }) => {
  const [shoppingList, setShoppingList] = useState<Recipe[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    getAllDocuments();
  }, []);

  const collectionRef = collection(db, "Ingredients", currentUser.uid, "Dish");

  const getAllDocuments = async () => {
    const querySnapshot = await getDocs(
      query(collectionRef, orderBy("timestamp", "desc"))
    );
    const items: Recipe[] = [];

    querySnapshot.forEach((doc) => {
      items.push(doc.data() as Recipe);
    });

    setShoppingList(items);
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  console.log(shoppingList);

  const handleIngredientCheck = async (
    recipeName: string,
    ingredientIndex: number
  ) => {
    const updatedShoppingList = [...shoppingList];

    // Update the checked property of the ingredient
    updatedShoppingList.forEach((recipe) => {
      if (recipe.name === recipeName) {
        recipe.ingredients[ingredientIndex].checked =
          !recipe.ingredients[ingredientIndex].checked;
      }
    });

    setShoppingList(updatedShoppingList);

    // Update the ingredient in Firestore
    const recipeDocRef = doc(
      db,
      "Ingredients",
      currentUser.uid,
      "Dish",
      recipeName
    );
    await updateDoc(recipeDocRef, {
      ingredients: updatedShoppingList.find(
        (recipe) => recipe.name === recipeName
      )?.ingredients,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-[10vh]">
        <section className="p-8">
          {shoppingList &&
            shoppingList.map((item) => (
              <div key={item.name}>
                <div
                  className={`w-full relative z-[49] flex justify-between items-center mt-2 py-2 px-4 text-2xl bg-mainGreen text-white rounded-xl
                  ${activeItem === item.name ? "border-b-2" : ""}
                  ${activeItem === item.name ? "active" : ""}
                  `}
                  onClick={() => handleItemClick(item.name)}
                >
                  <h2>{item.name}</h2>
                  <AiOutlineDown />
                </div>
                <ul
                  className={`w-full relative z-[48] flex flex-col justify-between items-start py-2 px-4 text-2xl bg-mainGreen text-white rounded-b-xl -translate-y-[10px]
                  ${activeItem === item.name ? "active" : "hidden"}
                  `}
                >
                  {item.ingredients.map((ingredient, index) => (
                    <li
                      className="w-full flex justify-between items-center"
                      key={index}
                    >
                      <h3>
                        {ingredient.ingredient} - {ingredient.measure}
                      </h3>
                      {ingredient.checked === true ? (
                        <MdOutlineCheckBox
                          onClick={() =>
                            handleIngredientCheck(item.name, index)
                          }
                        />
                      ) : (
                        <MdOutlineCheckBoxOutlineBlank
                          onClick={() =>
                            handleIngredientCheck(item.name, index)
                          }
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default ShoppingList;
