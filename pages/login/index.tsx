import React from 'react'
import styles from "../../styles/Home.module.css"
import Header from "../../components/Header/Header"
import {links} from "../../constans/links"
import LoginForm from "../../components/LoginForm/LoginForm";

 const index = () => {
  return (
    <div className={styles.wrapper}>
      <Header logo={"Choose tickets"} links={links}/>
      <LoginForm />
    </div>
  )
}
export default index;
