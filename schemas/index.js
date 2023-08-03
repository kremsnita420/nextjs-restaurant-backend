// Item types
import drinkItem from "./itemTypes/drinkItem";
import foodItem from "./itemTypes/foodItem";
// Item lists
// // Front page drinks
// import specialDrinks from "./itemLists//frontPage/specialDrinks";
// // Front page food
// import specialDishes from "./itemLists/frontPage/specialDishes";
// Menu page
import alcoholFreeDrinks from "./itemLists/menuPage/alcoholFreeDrinks";
import alcoholDrinks from "./itemLists/menuPage/alcoholDrinks";
import desserts from "./itemLists/menuPage/desserts";
import mainDishes from "./itemLists/menuPage/mainDishes";
import pizzas from "./itemLists/menuPage/pizzas";
import salads from "./itemLists/menuPage/salads";

export const schemaTypes = [
    drinkItem,
    foodItem,
    alcoholFreeDrinks,
    alcoholDrinks,
    mainDishes,
    pizzas,
    salads,
    desserts,]
