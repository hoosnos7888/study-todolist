import React, { useState } from "react";
import { Checkbox, Box, Typography, TextField, Button } from "@mui/material";

const TodoList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState("작성한문구");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flex: 1,
          minWidth: 0,
          textAlign: "left",
        }}
      >
        <Checkbox
          color="primary"
          checked={isCompleted}
          onChange={handleCheckboxChange}
        />
        {isEditing ? (
          <TextField
            value={todoText}
            onChange={handleTextChange}
            variant="standard"
            fullWidth
            sx={{ flex: 1 }}
          />
        ) : (
          <Typography
            sx={{
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textDecoration: isCompleted ? "line-through" : "none",
              color: isCompleted ? "gray" : "inherit",
            }}
          >
            {todoText}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        {isEditing ? (
          <Button variant="outlined" color="primary" onClick={handleSaveClick}>
            save
          </Button>
        ) : (
          <Button variant="outlined" color="primary" onClick={handleEditClick}>
            edit
          </Button>
        )}
        <Button variant="outlined" color="error">
          del
        </Button>
      </Box>
    </Box>
  );
};

export default TodoList;
