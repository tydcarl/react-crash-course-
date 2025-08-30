import "./Todo.css";

function Todo({ title, paragraph }) {
  console.log(title);
  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button onClick={() => console.log('clicked') }>Delete</button>
    </div>
  );
}
export default Todo;
