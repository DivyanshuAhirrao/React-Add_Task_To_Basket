import React from "react";
import TaskProvider from "./context/TaskContextApi";
import TaskForm from "./components/taskComponent/TaskForm";
import AllTasks from "./context/AllTasks";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <TaskProvider>
      <header>
        <Navbar />
      </header>
      <main className="flex-container">
        <TaskForm />
        <AllTasks />
      </main>
    </TaskProvider>
  );
};

export default App;
