import db, { RecipeDeleteArgs } from "db"

type DeleteRecipeInput = {
  where: RecipeDeleteArgs["where"]
}

export default async function deleteRecipe(
  { where }: DeleteRecipeInput,
  ctx: Record<any, any> = {}
) {
  const recipe = await db.recipe.delete({ where })

  return recipe
}
