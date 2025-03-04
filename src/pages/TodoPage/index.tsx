import { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoTitle from "../../components/TodoTitle";
import TodoListBoard from "../../components/TodoListBoard";
import { Box } from "@mui/material";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoSubmit = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "600px",
          padding: "24px",
        }}
      >
        <TodoTitle />
        <TodoForm onSubmit={handleTodoSubmit} />
        <TodoListBoard todos={todos} />
      </Box>
    </Box>
  );
}

export default TodoPage;
