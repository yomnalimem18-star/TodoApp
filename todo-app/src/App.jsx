import { useState } from "react";
function App(){
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);
  const addtask =()=>{ 
    setTodos([...todos,task]);
    setTask("");
  };
  const deleteTask=(index)=>{
    setTodos(todos.filter((_,i)=>i!==index));
  }
  const editTask=(index)=>{
    const newText=prompt("");
    if(newText!==null && newText!==""){
      const newTodos=todos.map((t,i)=>(i===index? newText:t));
      setTodos(newTodos);
    }
  }
  return(
    <>
    <h1>Todo App</h1>
    <input type="text" value={task}
    onChange={(e)=>setTask(e.target.value)} 
    placeholder="Add Task"/>
    <button onClick={addtask}>Add</button>
 
    <ul>
      {todos.map((t,i)=>(<li key={i}>{t}&nbsp;
      <button onClick={()=>editTask(i)}>Edit</button>
      <button onClick={()=>deleteTask(i)}>Delete</button>
      </li>))}
    </ul>
    </>
)};
  export default App;