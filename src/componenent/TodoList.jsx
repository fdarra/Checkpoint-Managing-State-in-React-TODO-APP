import React, { useEffect, useState } from "react";
import TodoModel from "./TodoModel";
import AddTodo from "./AddTodo";

const TodoList = () => {

  //// 
  const [TodoList, setTodoList] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("todoList")) ?? [
          { id: 1, title: "task1", completed: false },
        ]
      );
    } catch {
      console.log("the todo liste could not be parsed into JSON");
      return [];
    }
  });

  useEffect(
    () => localStorage.setItem("todoList", JSON.stringify(TodoList)),
    [TodoList]
  );
  const taskCompleted = (id) => {
    setTodoList(
      TodoList.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };
  const addTask = (task) => {
    setTodoList([
      ...TodoList,
      { id: Math.random(), title: task, completed: false },
    ]);
  };
  const deleteTask = (id) => {
    setTodoList(TodoList.filter((el) => el.id !== id));
  };
  const EdidTask = (id, newTask) => {
    setTodoList(
      TodoList.map((el) => (el.id === id ? { ...el, title: newTask } : el))
    );
  };

  return (
    <div>
      <AddTodo addTask={addTask} />

      {TodoList.map((todo) => (
        <TodoModel
          todo={todo}
          key={todo.id}
          taskCompleted={taskCompleted}
          addTask={addTask}
          deleteTask={deleteTask}
          EdidTask={EdidTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
