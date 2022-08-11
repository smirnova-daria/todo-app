import React from "react";
import "./App.css";
import { AllTasks } from "./components/AllTasks/AllTasks";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { TaskForm } from "./components/TaskForm/TaskFrom";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <AllTasks />
      <Menu />
    </>
  );
}

export default App;
