import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import cookies from 'js-cookie';
import axios from 'axios';
import Header from '../../components/Header/Header';
import {links} from "../../constans/links"
import ItemWrapper from "../../components/ItemWrapper/ItemWrapper"

const Ticket = () => {
  const [ticket, setTicket] = useState();
  const router = useRouter()

  const fetchTicket = async () => {
    try{
      const headers = {
        authorization: cookies.get("jwt_token")
      }
      const response = await axios.get(
        `${process.env.SERVER_URL}/tickets/${router.query.id}`,
        {headers,}
      );
      setTicket(response.data.ticket)
    } catch (err){
      // @ts-expect-error this is correct way to catch error
      if(err.response.status === 400){
        router.push("/login")
      }
    }
  }
  useEffect (() => {
    router.query.id && fetchTicket()
  }, [router])

  return (
    <div>
      <Header logo={"Fly Alone"} links={links} />
      {ticket && <ItemWrapper ticket={ticket}/>}
    </div>
  )
}

export default Ticket