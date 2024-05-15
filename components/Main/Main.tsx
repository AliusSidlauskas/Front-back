import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import cookies from "js-cookie";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import { TicketType } from "../../types/ticket";
import { useRouter } from "next/router";
import axios from "axios";
import { GetServerSideProps } from 'next';
import { getCookie } from "cookies-next";

const Main = () => {
  const router = useRouter();
  const [tickets, setTickets] = useState<TicketType[] | null>(null);

  const fetchTickets = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/tickets`, {
        headers,
      });
      setTickets(response.data.createdTickets);

      console.log("Tickets:", response.data.createdTickets);
      console.log(response);
    } catch (err) {
      // @ts-expect-error
      if (err.response.status === 401) {
        router.push("/login");
      }
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className={styles.main}>
      {tickets && <CardsWrapper tickets={tickets} />}
    </div>
  );
};

export default Main;

// type MainPageProps = {
//   tickets: TicketType[];
//   status: any;
// };

// const Main = ({ tickets, status }: MainPageProps) => {
//   const router = useRouter();

//   useEffect(() => {
//     if (status === 401) {
//       router.push("/login");
//     }
//   }, []);

//   return (
//     <div className={styles.main}>
//       {tickets && <CardsWrapper tickets={tickets} />}
//     </div>
//   );
// };
// export default Main;

// export async function getServerSideProps(ctx: any) {
//   try {
//     const headers = {
//       authorization: cookies.get("jwt_token"),
//     };
//     const response = await axios.get(`${process.env.SERVER_URL}/tickets`, {
//       headers,
//     });

//     return {
//       props: {
//         tickets: response.data.CreatedTickets,
//         status: response.status,
//       },
//     };
//   } catch (err) {
//     return {
//       props: {
//         // @ts-expect-error
//         status: err.response.status,
//       },
//     };
//   }
// }
