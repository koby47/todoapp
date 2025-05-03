import { useState } from "react";
import styles from  "./Form.module.css"; 

export default function Form({todos,setTodos}){
   
    const [todo,setTodo] = useState({name:"",done:false});// holds current to do object
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);//spread operator to maintain input
        setTodo({name:"",done:false});
       
    }
    return <form className={styles.todoform}      onSubmit={handleSubmit}>
               
              <div className={styles.inputContainer}>

              <input className={styles.modernInput}   onChange ={(e) => setTodo({name:e.target.value,done:false})}  
                 value={todo.name} type="text" placeholder="Enter todo item.." />
                <button type="submit" className={styles.modernButton}  >Add</button>

                </div> 
                
            </form>
}