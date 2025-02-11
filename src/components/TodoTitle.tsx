import { Typography, Box } from "@mui/material";

const TodoTitle = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Todo List
      </Typography>
    </Box>
  );
};

export default TodoTitle;
