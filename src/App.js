import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./components/recipe-tile/RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
const [healthLabel, sethealthLabel]= useState("vegan")

  const YOUR_APP_ID ="945df016";
const YOUR_APP_KEY
="bbea6be13750d1a292a180f81eb3ce13";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      
      <select className="app_healthLabels">
        <option onClick={ () =>sethealthLabel("vegan")}>Vegan</option>
        <option  onClick={ () =>sethealthLabel("vegetarian")}>Vegetarian</option>
        <option  onClick={ () =>sethealthLabel("paleo")}>Paleo</option>
        <option  onClick={ () =>sethealthLabel("dairy-free")}>Dairy-free</option>
        <option  onClick={ () =>sethealthLabel("gluten-free")}>Gluten-free</option>
        <option  onClick={ () =>sethealthLabel("wheat-free")}>Wheat-free</option>
        <option  onClick={ () =>sethealthLabel("low-sugar")}>Low-sugar</option>
        <option  onClick={ () =>sethealthLabel("egg-free")}>Egg-free</option>
        <option  onClick={ () =>sethealthLabel("peanut-free")}>Peanut-free</option>
        <option  onClick={ () =>sethealthLabel("tea-nut-free")}>Tea-nut-free</option>
        <option  onClick={ () =>sethealthLabel("soy-free")}>Soy-free</option>
        <option  onClick={ () =>sethealthLabel("fish-free")}>Fish-free</option>
     
      </select>
      </form>

      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;