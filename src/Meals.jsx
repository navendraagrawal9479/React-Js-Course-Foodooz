import React from "react";
import { Stack } from "@mui/system";
import Meal from "./Meal";
import MEALS from "./data";
import { Typography } from "@mui/material";

const Meals = (props) => {

  return (
    <>
      <Typography
        variant='h4'
        style={{ fontWeight: "bold", textAlign: "center", margin: "20px 10px" }}
      >
        Food Items Delivered at your Doorstep.
      </Typography>
      <Stack
        sx={{ margin: "20px" }}
        direction='row'
        gap={2}
        flexWrap='wrap'
        justifyContent={"center"}
        alignItems='center'
      >
        {MEALS.map((meal) => {
          return (
            <Meal
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              image={meal.image}
              addToCart = {props.addToCart}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default Meals;
