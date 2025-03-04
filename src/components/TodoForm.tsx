import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

interface TodoFormProps {
  onSubmit: (text: string) => void;
}
const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [inputText, setInputText] = useState("");

  console.log("commit test");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSubmit(inputText);
      setInputText("");
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 1 }}
    >
      <TextField
        fullWidth
        label="Add a New Todo"
        variant="outlined"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
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
};

export default TodoForm;
