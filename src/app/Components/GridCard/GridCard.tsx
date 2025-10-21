import React from "react";
import Card from "../Card/Card";
import styles from "./GridCard.module.css";

export default function GridCard() {
  const products = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBk3WYZXe3HbUAL70gzW49JTTBvu6rXzaXw&s",
      title: "Shirt",
      description: "A elegant white shirt for all occasions.",
      price: 19.99,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHetgFHFVmiCZ1SM_nTDaXB8WiAVTX2SlJvw&s",
      title: "Jins Skirt",
      description: "Bright and fun — perfect for summer days.",
      price: 21.99,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHXt6RI30QxJFhPsks-hz-6F6II0IFEjg7A&s",
      title: "Blue T-Shirt",
      description: "Comfortable and stylish.",
      price: 18.99,
    },
    
  ];

  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
