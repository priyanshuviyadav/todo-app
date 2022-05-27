import TodoItem from "./TodoItem";
export default function TodoList({
  AllTodo,
  handleMarkComplete,
  handleDeleteItem,
}) {
  const TodoList1 = AllTodo.map((item) => {
    return (
      <>
        {item.isDeleted === false && (
          <TodoItem
            key={item.id}
            taskId={item.id}
            taskValue={item.task}
            isCompleted={item.isCompleted}
            handleMarkComplete={handleMarkComplete}
            handleDeleteItem={handleDeleteItem}
          />
        )}
      </>
    );
  });
  return (
    <div className="text-center">
      <h1 className="  text-center   ">{TodoList1}</h1>
    </div>
  );
}
