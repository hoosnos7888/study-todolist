import TodoForm from "../../components/TodoForm";
import TodoTitle from "../../components/TodoTitle";
import TodoListBoard from "../../components/TodoListBoard";
import { Box } from "@mui/material";

function TodoPage() {
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
        }}
      >
        <TodoTitle />
        <TodoForm />
        <TodoListBoard />
      </Box>
    </Box>
  );
}

export default TodoPage;
