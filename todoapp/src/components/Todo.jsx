import { useState } from "react";
import Form from "./Form"
import TodoList from "./TodoList"

export default function Todo (){
    const [todos,setTodos] =useState([]);//holds todos.it is list hence arrays
    return (<div>
        <Form todos={todos} setTodos={setTodos} />

       <TodoList todos={todos}/>
            
    </div>
    );
}
