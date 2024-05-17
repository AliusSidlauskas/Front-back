// Susikurti naują Next.js projektą. Rinktis, kad būtu TS sintaksė.
// 3. Susikurti header komponentą, komponentui aprašyti tipą;
// 4. Apsirašyt login formą bei daryti kreipimasi į backend.
// 5. Sėkmingu prisijungimo atveju user turi būt perkeltas į kitą puslapį, nesekmingu - atvaizduojama error žinutė;
// 6.Formos buttonui pridėti loading state;
// 7. Sekmingo pisijungimo metu duomenys turi būt išsaugomi cookie'yje;
// 8. Pagrindiniame index js puslapy padaryt fetch bei parsisiūst visus duomenis, prieš pradedant siuntima nepaniršt authorization headers;
// 9. Error atveju suhandlint error'ą;
// 10. Sekmingai parsisiuntus duomenis atvaizduoti žaidimų korteles ekrane;
// 11.Neprisijungus bandant gauti item'us user turi būt nukreiptas į login funkciją;
// 12. Applikacija pritaikyt mobile versijai;
// 13. Paspaudus ant kortelės turi atsidaryt item puslapis;
// 14. Item puslapy - item galima ištrinti paspaudus ant delete mygtuko;
// 15. Suvienodit url;
// 16. EXTRA: pridėti main puslapiui SSR fetch
// 17. Sukurti Item puslpį, jame atvaizduot duomenis;
// 18. Pridėt ištrinimo mygtuką;
// 19.EXTRA: Prieš ištrinant turi atsirast modal'as kuris paklaustu ar tikrai norim ištrint item;
// 20. Sukurti game pridėjimo formą;
// 19. Prieš ištrinant turi atsirast modal'as kuris paklaustu ar tikrai norim ištrint item;
// 20. Mobile menu
// 21. Sukurti puslapio template;


import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import { links } from "../constans/links";
import  Main from "../components/Main/Main"
import Link from "next/link";
import PageTemplate from "../components/PageTemplate/PageTemplate";

// import cookies from "js-cookie";
// import CardsWrapper from "../components/CardsWrapper/CardsWrapper";
// import { TicketType } from "../types/ticket";
// import axios from "axios";
// import { useRouter } from "next/router";

const Index = () => {
  // const router = useRouter();
  // const [tickets, setTickets] = useState<TicketType[] | null>(null);

  // const fetchTickets = async () => {
  //   try {
  //     const headers = {
  //       authorization: cookies.get("jwt_token"),
  //     };

  //     const response = await axios.get("http://localhost:3001/tickets", {
  //       headers,
  //     });
  //     setTickets(response.data.createdTickets);

  //     console.log("Tickets:", response.data.createdTickets)
  //     console.log(response);
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };
  // useEffect(() => {
  //   fetchTickets();
  // }, []);

  return (<PageTemplate>
      <div className={styles.linkWrapper}>
        <Link href="/add-ticket">Create Ticket</Link>
      </div>
      {/* {tickets && <CardsWrapper tickets={tickets} />} */}
      <Main  />
    
    </PageTemplate>
  );
};

export default Index;
