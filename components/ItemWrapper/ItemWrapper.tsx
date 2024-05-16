import React from "react";
import axios from "axios";
import cookies from "js-cookie";
import { TicketType } from "@/types/ticket";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import styles from "./ItemWrapper.module.css";

type ItemWrapperProps = {
  ticket: TicketType;
};

const ItemWrapper = ({ ticket }: ItemWrapperProps) => {
  const router = useRouter();

  console.log(ticket);

  const deleteItem = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.delete(
        `${process.env.SERVER_URL}/tickets/${router.query.id}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        router.push("/");
      }

      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.imgSection}>
        <img src={ticket.destinationImageUrl} alt="Image" />
      </div>

      <div className={styles.info}>
        <h2>{ticket.title}</h2>
        <h4>${ticket.ticketPrice}</h4>
        <h4>{ticket.boardingLocation}</h4>
        <h4>{ticket.destinationLocation}</h4>

        <Button
          className={styles.deleteButton}
          type="WARNING"
          isLoading={false}
          title="Delete item"
          onClick={deleteItem}
        />
      </div>
    </main>
  );
};

export default ItemWrapper;
