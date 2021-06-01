import Axios from "axios";
import {useState} from "react";
import "./App.css";
import RecipeTile from '../src/components/recipe-tile/RecipeTile';

function App() {
  const [query, setquery]= useState("");
  const[recipes, setrecipes] =useState("");
 const YOUR_APP_ID ="6547efc8";
const YOUR_APP_KEY
="ae286214f6a7882af0d6c117923be84f";

  var url 
  = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url)  ;
    setrecipes(result.data.hits)
    //.hits because hits is contains all recipes and we dont want the part of data above hits 

    console.log(result.data);
  }
  const onSubmit =(e) =>{
    e.preventDefault();
    // will prevent reloading of page
    getRecipes();

  }
  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
<input
className="app__input"
type ="text"
 placeholder ="enter ingridient"
value ={query} 
onChange={(e)=> setquery(e.target.value)}
/>

  <input className="app__submit"
  type="submit" value ="Search"  />
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

