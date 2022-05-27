import TodoItem from "./TodoItem";
export default function FilteredData({ filteredData }) {
  const filteredTodoList = filteredData.map((item) => {
    return (
      <>
        <TodoItem
          key={item.id}
          taskId={item.id}
          taskValue={item.task}
          isCompleted={item.isCompleted}
        />
      </>
    );
  });
  return (
    <>
      <ul>{filteredTodoList}</ul>
    </>
  );
}
