import { useState } from "react";
export default function AddNewTodo({ handleAddNewTodo, handleDeleletAll }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewTodo(todo);
    setTodo("");
  };
  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <form className=" text-center   " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo List"
          value={todo}
          onChange={handleTodo}
          className="border-2 rounded-lg"
        />
        <button
          className="text-center font-bold bg-black text-white m-2 border-2 rounded-lg border-solid border-blue-200   border-4 mt-4   hover:bg-red-600 "
          type="button"
        >
          Add Todo
        </button>
        <button
          className=" text-center font-bold bg-black text-white m-2 border-2 rounded-lg border-solid border-blue-200   border-4 mt-4   hover:bg-red-600"
          type="button"
          onClick={handleDeleletAll}
        >
          Delelet All
        </button>
      </form>
    </>
  );
}
