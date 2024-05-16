import React, { useState } from "react";
import cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import { links } from "../../constans/links";
import styles from "./CreateTicket.module.css";
import Button from "../../components/Button/Button"

const CreateTicket = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [boardingLocation, setBoardingLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [destinationImageUrl, setDestinationImageUrl] = useState("");

  const createTicket = async () => {
    try {
      const newTicket = {
        title: title,
        ticketPrice: ticketPrice,
        boardingLocation: boardingLocation,
        destinationLocation: destinationLocation,
        destinationImageUrl: destinationImageUrl,
      };
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      const response = await axios.post(
        `${process.env.SERVER_URL}/tickets`,
        newTicket,
        {
          headers,
        }
      );
      console.log(response);

      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isAllFieldsFilled =
    title &&
    ticketPrice &&
    boardingLocation &&
    destinationLocation &&
    destinationImageUrl;

  return (
    <div>
      <Header logo={"Choose tickets"} links={links} />

      <div className={styles.form}>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Price"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
        />
        <input
          placeholder="Boarding Location"
          value={ boardingLocation}
          onChange={(e) => setBoardingLocation(e.target.value)}
        />
        <input
          placeholder="Destination Location"
          value={destinationLocation}
          onChange={(e) => setDestinationLocation(e.target.value)}
        />
        <input
          placeholder="Image Url"
          value={destinationImageUrl}
          onChange={(e) => setDestinationImageUrl(e.target.value)}
        />

    <Button className={`${isAllFieldsFilled ? styles.validBtn : styles.invaidBtn}`}
    isLoading={false}
    title = "Create Ticket"
    onClick={createTicket}/>
      </div>
    </div>
  );
};

export default CreateTicket;
