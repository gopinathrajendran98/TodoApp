import React, {useState} from "react";
import "./index.css";
import TodoList from "./TodoList";
const Todo = ()=>{
    const [value, setValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleSetValue = (obj) =>{
        setValue(obj.target.value);
    }
    const handleAdd = () =>{
        setTodoList([...todoList,value]);
        setValue("");
    }
    const handleDelete = (index) =>{
        const newList = [...todoList];
        newList.splice(index,1);
        setTodoList(newList);
    }
  return(
      <>
      <div className="input-container1">
        <input type ="text" value={value} onChange={(val)=>{handleSetValue(val)}} onKeyDown={(e)=> {
            if (e.key === 'Enter') {
                handleAdd();
              }
        }}/>
        
        <div class="class1">
       <button onClick={()=>{handleAdd()}}>Add</button>
       </div>
       </div>
       
      <TodoList todoList={todoList} handleDelete={handleDelete}/>
      </>
  )  
};

export default Todo