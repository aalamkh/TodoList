import React, { useState } from 'react'
import styles from './Form.module.css'
import Item from '../items/Item'


const Form = () => {
  
  const [type,setType] = useState("")
  const [list,setList] = useState([])

  const handleTypeForm =(event)=>{
    setType(event.target.value)
  }

  const handleSubmitBtn =(event)=>{
    event.preventDefault()
    const obj = {
      id : Math.random(),
      name: type,
      status:"pending"
    }
    const prevTask = list
     setList([...prevTask,obj])
     setType("")
     
  }

  const deleteBtn = (id)=>{
    const newlisting = list.filter((element)=>{
     
     return element.id !== id
 
    })
    setList(newlisting) 
  }

  const doneBtn = (id)=>{
    const updatedList = list.map((element)=>{
      if(element.id === id)  element.status="completed"
     
      return element;
    })
    setList(updatedList) 
  }

  const clearBtn = ()=> {
    setList([])
  }
  return (
   <>
     <div className={styles.forming}>
       <h3>Write Your Daily task here.</h3>
       <form className={styles.inputing}>
           <input type="text" placeholder='Type here' value={type} onChange={handleTypeForm}  />
           <button type='submit' onClick={handleSubmitBtn}>Submit</button>
       </form>



      <ul>
       {list.map((element)=>{
         return  <Item list={element} deleting={deleteBtn} adding={doneBtn}/>
        })}
      </ul>
     
        <button  onClick={clearBtn} style={{background:"black",color:"white",marginLeft:"48.4%",border:"none",borderRadius:"6px",padding:"9px 16px",border:"1px solid gray", fontSize:"15px"}}>Clear</button>
    </div>
     
   </>
 
  )
}

export default Form