import React from 'react'
import styles from "../../styles/Home.module.css"
import Header from "../../components/Header/Header"
import {links} from "../../constans/links"
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTemplate from '../../components/PageTemplate/PageTemplate';

 const index = () => {
  return (

     <PageTemplate>
      <LoginForm />
    </PageTemplate>
  )
}
export default index;
