import styles from "./RecipeItem.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import { IRecipe } from "../../types/recipe.types";
import { useActions } from "../../hooks/useActions";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();

  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} width={100} />
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExist ? "Remove from " : "Add to "} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
