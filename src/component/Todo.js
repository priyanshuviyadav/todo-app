import { useState } from "react";
import { nanoid } from "nanoid";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";
import FilteredData from "./FilteredData";
export default function Todo() {
  const initialTasks = [
    { id: "001a", task: "task1", isCompleted: false, isDeleted: false },
    { id: "001b", task: "task2", isCompleted: false, isDeleted: false },
    { id: "001c", task: "task3", isCompleted: false, isDeleted: false },
  ];

  const [alltodo, setAllTodo] = useState(initialTasks);
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleIsCompleted = () => {
    setShowFilteredData(true);
    const data = alltodo.filter((element) => element.isCompleted === true);
    setFilteredData(data);
  };

  const handleViewDeletedTask = () => {
    setShowFilteredData(true);
    const tasks = alltodo.filter((element) => element.isDeleted === true);
    setFilteredData(tasks);
  };

  const handleViewAllTask = () => {
    setShowFilteredData(true);
    setFilteredData(alltodo);
  };

  const handleDeleteItem = (todoId) => {
    const itemList = alltodo.map((element) => {
      if (element.id === todoId) {
        const deleteItemList = { ...element, isDeleted: true };
        return deleteItemList;
      }
      return element;
    });
    setAllTodo(itemList);
  };

  const handleMarkComplete = (todoId) => {
    const newItemList = alltodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isCompleted: true };
        return newValue;
      }
      return element;
    });
    setAllTodo(newItemList);
  };

  const handleNewTodo = (newTodo) => {
    let newTodoObj = {
      id: nanoid(5),
      task: newTodo,
      isCompleted: false,
      isDeleted: false,
    };
    const newTodoList = [...alltodo, newTodoObj];
    setAllTodo(newTodoList);
  };
  const handleDeleteTodo = () => {
    setAllTodo([]);
  };

  return (
    <>
      <AddNewTodo
        handleAddNewTodo={handleNewTodo}
        handleDeleletAll={handleDeleteTodo}
      />

      <div
        className="text-center box-content h-100 w-50  m-2
  flex flex-row justify-center  "
      >
        <div className="text-center">
          <button
            className=" text-center font-bold bg-black text-white border-2 rounded-lg m-2 border-solid border-blue-200     border-4 mt-4   hover:bg-red-600 "
            onClick={() => setShowFilteredData(false)}
          >
            Active Todo
          </button>

          <button
            className=" text-center font-bold bg-black 	 text-white border-2 m-2 rounded-lg border-solid border-blue-200    border-4 mt-4   hover:bg-red-600"
            onClick={handleViewDeletedTask}
          >
            All Deleted Todo
          </button>

          <button
            className=" text-center font-bold bg-black text-white m-2 border-2 rounded-lg border-solid border-blue-100      border-4 mt-4   hover:bg-red-600	"
            onClick={handleViewAllTask}
          >
            All Task
          </button>

          <button
            className=" text-center font-bold bg-black text-white m-2 border-2 rounded-lg border-solid border-blue-100      border-4 mt-4   hover:bg-red-600	"
            onClick={handleIsCompleted}
          >
            mark completed
          </button>
          {showFilteredData === true ? (
            <FilteredData filteredData={filteredData} />
          ) : (
            <TodoList
              handleMarkComplete={handleMarkComplete}
              handleDeleteItem={handleDeleteItem}
              AllTodo={alltodo}
            />
          )}
        </div>
      </div>
    </>
  );
}
