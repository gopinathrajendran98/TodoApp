import React from "react";
import "./index.css";

const TodoList = ({todoList,handleDelete})=>{

  return(
      <div className="list-container">
          {
             todoList && todoList.length >0 && todoList.map((name, index)=>{
                  return(
                    <div className="item-container" key={index}>
                        {name}
                      
                      <div className="add"> 
                        <button onClick={()=>{handleDelete(index)}}>Delete</button>
                    </div>
                    </div>
                  )
              })
          }
      </div>
  )  
};

export default TodoList;