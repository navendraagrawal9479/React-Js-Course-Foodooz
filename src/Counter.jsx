import React from "react";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  console.log("component rerendered");
  const [counter, setCounter] = useState(0);

  function subtract() {
    setCounter((curr) => curr - 1);
  }

  function add() {
    setCounter(counter + 1);
  }

  return (
    <Stack
      direction={"row"}
      sx={{ margin: "20px" }}
      gap={2}
      justifyContent='center'
      alignItems={"center"}
    >
      <Button onClick={subtract}>Subtract</Button>
      <Typography variant='h3'>{counter}</Typography>
      <Button onClick={add}>Add</Button>
    </Stack>
  );
};

export default Counter;
