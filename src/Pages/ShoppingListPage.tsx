import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";

interface ShoppingListProps {
  currentUser: any;
}

interface Ingredient {
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

  console.log(shoppingList);

  return (
    <div>
      <Navbar />
      <div className="mt-[10vh]">
        {shoppingList &&
          shoppingList.map((item) => <p key={item.name}>{item.name}</p>)}
      </div>
    </div>
  );
};

export default ShoppingList;
