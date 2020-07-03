import React from "react"
import { Link } from "blitz"
import { Recipe } from "db"

type Props = {
  recipes: Recipe[]
}

const Recipes = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href="/recipes/[recipeId]" as={`/recipes/${recipe.id}`}>
            <a>{recipe.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Recipes
