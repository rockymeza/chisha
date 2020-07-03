import db, { FindManyRecipeArgs } from "db"

type GetRecipesInput = {
  where?: FindManyRecipeArgs["where"]
  orderBy?: FindManyRecipeArgs["orderBy"]
  cursor?: FindManyRecipeArgs["cursor"]
  take?: FindManyRecipeArgs["take"]
  skip?: FindManyRecipeArgs["skip"]
  // Only available if a model relationship exists
  // include?: FindManyRecipeArgs['include']
}

export default async function getRecipes(
  { where, orderBy, cursor, take, skip }: GetRecipesInput,
  ctx: Record<any, any> = {}
) {
  const recipes = await db.recipe.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
  })

  return recipes
}
