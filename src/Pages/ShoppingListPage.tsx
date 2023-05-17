import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const ShoppingList = ({ currentUser }: { currentUser: any }) => {
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  useEffect(() => {
    getAllDocuments();
  }, []);

  const collectionRef = collection(db, "Ingredients", currentUser.uid, "Dish");

  const getAllDocuments = async () => {
    const querySnapshot = await getDocs(collectionRef);
    const items: string[] = [];

    querySnapshot.forEach((doc) => {
      items.push(doc.id);
    });

    setShoppingList(items);
  };

  console.log(shoppingList);

  return (
    <div>
      <Navbar />
      <div className="mt-[10vh]">
        {shoppingList && shoppingList.map((item) => <p key={item}>{item}</p>)}
      </div>
    </div>
  );
};

export default ShoppingList;
