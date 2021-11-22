import React, { useState, useEffect } from "react";

//Components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

//Styles
import "./styles/App.css";

const App = () => {
  //STATE
  const [todoList, setTodoList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [clickOpt, setClickOpt]=useState(false);

  //EFFECT

  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      setTodoList(resultTodoList);
    };
    handleTodoList();
  }, []);

  // useEffect(()=>{
  //   buttonClick();
  // }, [todoList]);

  //FUNCIONES
  const handleCompletTodo = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const buttonClick = text => {
    console.log(text);
    let a;  
    if (text === 'true') {
        a = todoList.filter(item => item.completed === false);
      } else if (text === 'false') {
        a = todoList.filter(item => item.completed === true);
      } else {
        a = todoList;
      }
      setFilterList(a);
      console.log(a); 
      setClickOpt(!clickOpt);
  }

  return (
    <div className="App">
      <Header />
      <Nav buttonClick={buttonClick} />
      {/* <div className="todo-container">
        {todoList && todoList.length > 0 ? (
          todoList.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompletTodo}
              id={singleTodo.id}
            />
          ))
        ) : (
          <Loader />
        )}
      </div> */}
      <div className="todo-container">
        {
        clickOpt ? 
        (filterList && filterList.length > 0 ? (
          filterList.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompletTodo}
              id={singleTodo.id}
            />
          ))
        ): <Loader />)
        :
        (todoList && todoList.length > 0 ? (
          todoList.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompletTodo}
              id={singleTodo.id}
            />
          ))
        ) : (
          <Loader />)
        )}
      </div>
    </div>
  );
};

export default App;
