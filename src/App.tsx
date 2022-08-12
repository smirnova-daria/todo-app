import React from "react";
import "./App.css";
import { TasksList } from "./components/TasksList/TasksList";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { TaskForm } from "./components/TaskForm/TaskFrom";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth='sm'>
      <Header />
      <TaskForm />
      <TasksList />
      <Menu />
    </Container>
  );
}

export default App;
