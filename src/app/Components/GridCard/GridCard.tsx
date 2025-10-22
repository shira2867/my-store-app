"use client"; 

import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./GridCard.module.css";

// טיפוס למוצר יבוא מ-CardProps
import {CardProps} from "../Card/Card";
export default function GridCard() {
  const [products, setProducts] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: CardProps[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.grid}>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <Card
            _id={product._id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))
      )}
    </div>
  );
}
