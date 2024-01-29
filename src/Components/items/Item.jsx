import React from 'react'
import styles from './Item.module.css'

const Item = ({list,deleting,adding}) => {
  return (
    <li className={styles.iteming} >
       
       {list.status === "pending" ? <p>{list.name}</p> : <del>{list.name}</del>}
        
         <div>
            <button onClick={()=>{
                adding(list.id)
            }}>✅</button>
            <button onClick={()=>{
                deleting(list.id)
            }}>❌</button>  
         </div>
  
    </li>
  )
}

export default Item