import db, { FindOneRecipeArgs } from "db"

type GetRecipeInput = {
  where: FindOneRecipeArgs["where"]
  include?: FindOneRecipeArgs["include"]
}

export default async function getRecipe(
  { where, include }: GetRecipeInput,
  ctx: Record<any, any> = {}
) {
  const recipe = await db.recipe.findOne({ where, include })

  return recipe
}
