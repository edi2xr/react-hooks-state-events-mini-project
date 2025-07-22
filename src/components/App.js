import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data"; // ← go up one level to access `data.js`


function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(text) {
    const updatedTasks = taskList.filter(task => task.text !== text);
    setTaskList(updatedTasks);
  }

  function handleAddTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList
        tasks={taskList}
        selectedCategory={selectedCategory}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
