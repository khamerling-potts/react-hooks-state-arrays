import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [currentCuisine, setCuisine] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood]);
  }

  const foodToDisplay = foods.filter((food) => {
    if (currentCuisine === "All") {
      return true;
    } else {
      return food.cuisine === currentCuisine;
    }
  });

  const foodList = foodToDisplay.map((food) => (
    <li key={food.id} onClick={() => handeLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handeLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        ++food.heatLevel;
      }
      return food;
    });
    setFoods(newFoodArray);
  }

  function filterCuisine(currentCuisine) {
    setCuisine(currentCuisine);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select
        name="filter"
        onChange={(event) => filterCuisine(event.target.value)}
      >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
