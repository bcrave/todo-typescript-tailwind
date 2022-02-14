import { ChangeEvent, FormEvent } from "react";

type Props = {
  task: string;
  handleChange: (e: ChangeEvent) => void;
  handleSubmit: (e: FormEvent) => void;
};

const AddTodo = ({ task, handleChange, handleSubmit }: Props) => {
  return (
    <div className="mb-10 w-full">
      <form className="flex justify-between w-full" onSubmit={handleSubmit}>
        <input
          className="flex-1 rounded shadow p-2 text-gray-dark mr-2 outline-none focus:shadow-lg"
          type="text"
          placeholder="Add an item here..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
          type="submit"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
