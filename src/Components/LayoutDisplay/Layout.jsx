import React from 'react'
import styles from './Layout.module.css'
import Form from '../forms/Form'


const Layout = () => {
   

  return (
    <div className={styles.layout}>
     <h1>ToDo List</h1>
     <h3>Daily Task</h3>
    
     <Form/>
    
    </div>
  )
}

export default Layout