import { ChangeEvent, FormEvent, useState } from "react";
import { uuid } from "../helpers/uuid";

import AddTodo from "./AddTodo";
import Row from "./Row";

type Todo = {
  id: string;
  task: string;
  isComplete: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "0",
      task: "Write your first todo!",
      isComplete: false,
    },
  ]);
  const [task, setTask] = useState("");
  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isComplete).length;

  const handleAdd = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      task: task,
      isComplete: false,
    };
    task && handleAdd(todo);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => id !== todo.id);
    setTodos(updatedTodos);
  };

  const toggleChecked = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section className="w-10/12 sm:w-10/11 lg:w-1/2 max-w2xl flex flex-col items-center justify-center">
      <AddTodo
        task={task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          toggleChecked={toggleChecked}
          handleDelete={handleDelete}
        />
      ))}
      {!hasTodos && <p className="text-red-500">Your list is empty!</p>}
      {hasTodos && `${remainingTodos} of ${todos.length} items remaining`}
    </section>
  );
};

export default Todos;
