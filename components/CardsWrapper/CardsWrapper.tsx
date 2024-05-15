import React from "react";
import { TicketType } from "../../types/ticket";
import Card from "../Card/Card";
import styles from "./CardsWrapper.module.css";

type CardsWrapper = {
  tickets: TicketType[];
};

const CardsWrapper = ({ tickets }: CardsWrapper) => {
  return (
    <div className={styles.cardsWrapper}>
      {tickets.map((ticket) => (
        <Card
          id={ticket.id}
          key={ticket.id}
          title={ticket.title}
          ticketPrice={ticket.ticketPrice}
          boardingLocation={ticket.boardingLocation}
          destinationLocation={ticket.destinationLocation}
          destinationImageUrl={ticket.destinationImageUrl}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
