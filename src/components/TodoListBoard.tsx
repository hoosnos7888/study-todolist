import { Box } from "@mui/material";
import TodoList from "./TodoList";

// Todo 타입 정의
interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TodoListBoardProps {
  todos: Todo[];
}

const TodoListBoard = ({ todos }: TodoListBoardProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todoText={todo.text}
          isCompleted={todo.isCompleted}
        />
      ))}
    </Box>
  );
};

export default TodoListBoard;
