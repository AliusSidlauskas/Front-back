import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

type CardProps = {
  id: string;
  title: string;
  ticketPrice: number;
  boardingLocation: string;
  destinationLocation: string;
  destinationImageUrl: string;
};

const Card = ({
  id,
  title,
  ticketPrice,
  boardingLocation,
  destinationLocation,
  destinationImageUrl,
}: CardProps) => {
  return (
    <Link href={`/ticket/${id}`} className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <h3>{title}</h3>
        <h4>{ticketPrice}</h4>
        <h4>{boardingLocation}</h4>
        <h4>{destinationLocation}</h4>
      </div>
      <img alt="ticket" src={destinationImageUrl} />
    </Link>
  );
};

export default Card;
