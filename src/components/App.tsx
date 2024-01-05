import { useState } from "react";
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
// import User from "./user/User";

// const userId = 1;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryTerm, setQueryTerm] = useState("");

  const { data, isLoading } = useGetRecipesQuery(queryTerm);
  // undefined, {
  // skip: !userId,
  // }

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />

      <div style={{ padding: 10 }}>
        <p style={{ marginBottom: 5 }}>Search: </p>
        <>
          <input
            type="search"
            value={searchTerm}
            onChange={({ target: { value } }) => setSearchTerm(value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
        </>
      </div>

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  );
}

export default App;
