import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

function TodoForm() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        justifyContent: "space-between",
      }}
    >
      <TextField
        fullWidth
        label="Add a New Todo"
        variant="outlined"
        sx={{ flex: 1 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          "& .MuiButton-startIcon": {
            margin: "auto",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
        startIcon={<Add />}
      ></Button>
    </Box>
  );
}

export default TodoForm;
