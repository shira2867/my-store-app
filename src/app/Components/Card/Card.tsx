import React from "react";
import styles from "./Card.module.css";

export  type CardProps = {
    _id: string;
    image: string;
    title: string;
    description: string;
    price: number;
};

export default function Card(props: CardProps) {
    return (
        <div className={styles.card}>
            <img src={props.image} alt={props.title} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.desc}>{props.description}</p>
                <p className={styles.price}>${props.price.toFixed(2)}</p>
                <button className={styles.btn}>Add to Cart</button>
            </div>
        </div>
    );
}
