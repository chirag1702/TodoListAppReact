import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import React, { useEffect, useState } from 'react';
import AddTodo from './Components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About';


function App() {

  let initTodo = [];

  if (!localStorage.getItem("todos")) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("on delete of", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    let newTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, newTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Todo List App" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <TodoList todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
