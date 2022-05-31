export default function TodoItem({
  taskValue,
  taskId,
  handleMarkComplete,
  handleDeleteItem,
  isCompleted,
}) {
  const taskStyle = {
    textDecorationLine: isCompleted === true ? "line-through" : "none",
    color: isCompleted === true ? "blue" : "purple",
    fontWeight: "bold",
    fontSize: "20px",
  };

  return (
    <>
      <div
        className="text-center   p-2 w-200  m-2 bg-red-300  
	
        border-2 border-solid max-w-lg  border-blue-200  px-5 py-3 rounded-xl "
      >
        <h1 clasName="text-center  " style={taskStyle}>
          {taskValue}
        </h1>

        <div>
          <button
            onClick={() => handleMarkComplete(taskId)}
            className=" border-2 border-solid border-blue-200 font-bold rounded-lg  text-white font-bold   m-2 text-center font-bold bg-black text-white   border-4 mt-4   hover:bg-blue-600 "
          >
            Mark Complete
          </button>
          <button
            type="button"
            onClick={() => handleDeleteItem(taskId)}
            className=" border-2 border-solid border-blue-200 rounded-lg    m-2 text-center font-bold bg-black text-white   border-4 mt-4   hover:bg-blue-600 "
          >
            Delelet
          </button>
        </div>
      </div>
    </>
  );
}
