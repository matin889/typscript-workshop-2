enum Drinks {
  Coffee,
  Tea,
  Milk,
}

interface Meal {
  type: string;
}

interface Breakfast extends Meal {
  starter: string;
  main: string;
  drinks: Drinks;
}

interface Lunch extends Meal {
  starter: string;
  main: string;
  desert: string;
  drinks: Drinks;
}

interface Dinner extends Meal {
  starter: string;
  main: string;
  drinks: Drinks;
}

const mealMenu = (meal: Meal) => {
  switch (meal.type) {
    case "breakfast":
      return `Starter: ${breakfast.starter}, Main: ${breakfast.main}, Drinks: ${breakfast.drinks}`;
      break;
    case "lunch":
      return `Starter: ${lunch.starter}, Main: ${lunch.main}, Drinks: ${lunch.drinks}`;
      break;
    case "dinner":
      return `Starter: ${dinner.starter}, Main: ${dinner.main}, Drinks: ${dinner.drinks}`;
      break;

    default:
      break;
  }
};

const breakfast: Breakfast = {
  type: "breakfast",
  starter: "Fruits",
  main: "Bread and Butter",
  drinks: Drinks.Coffee,
};
const lunch: Lunch = {
  type: "lunch",
  starter: "Nuts",
  main: "Pasta",
  desert: "Apple Pie,",
  drinks: Drinks.Tea,
};
const dinner: Dinner = {
  type: "dinner",
  starter: "Fruits",
  main: "Pizza",
  drinks: Drinks.Milk,
};
console.log(mealMenu(lunch));
