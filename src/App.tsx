import React from "react";
import "./App.css";
import { TasksList } from "./components/TasksList/TasksList";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { TaskForm } from "./components/TaskForm/TaskFrom";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <TasksList />
      <Menu />
    </>
  );
}

export default App;
