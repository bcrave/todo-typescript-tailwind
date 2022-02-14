type Todo = {
  id: string;
  task: string;
  isComplete: boolean;
};

type Props = {
  todo: Todo;
  toggleChecked: (id: string) => void;
  handleDelete: (id: string) => void;
};

const Row = ({
  todo: { id, task, isComplete },
  toggleChecked,
  handleDelete,
}: Props) => {
  return (
    <div
      className={`
        p-4 mb-2 flex justify-between items-center w-full rounded 
        ${isComplete ? "bg-gray-300" : "bg-green-300"}`}
    >
      <p
        className={`
          ml-2 text-xl font-sans font-medium
          ${isComplete ? "text-white line-through" : "text-gray-700"} 
      `}
      >
        {task}
      </p>
      <div className="w-1/6 flex justify-between items-center mr-2">
        <button
          className="h-7 w-7 rounded flex justify-center items-center mr-2 bg-red-400 hover:bg-red-700 text-white"
          aria-label="delete a todo"
          onClick={() => handleDelete(id)}
        >
          X
        </button>
        <input
          className="form-checkbox h-7 w-7"
          type="checkbox"
          onChange={() => toggleChecked(id)}
          checked={isComplete}
        />
      </div>
    </div>
  );
};

export default Row;
