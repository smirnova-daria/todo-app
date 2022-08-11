import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ActiveTasks } from "./components/ActiveTasks/ActiveTasks";
import { AllTasks } from "./components/AllTasks/AllTasks";
import { CompletedTasks } from "./components/CompletedTasks/CompletedTasks";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { TaskForm } from "./components/TaskForm/TaskFrom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TaskForm />
      <Routes>
        <Route path="/all" element={<AllTasks />} />
        <Route path="/active" element={<ActiveTasks />} />
        <Route path="/completed" element={<CompletedTasks />} />
      </Routes>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
