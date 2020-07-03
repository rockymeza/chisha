import db, { RecipeUpdateArgs } from "db"

import { CreateRecipeInput } from "app/recipes/types"

type UpdateRecipeInput = {
  where: RecipeUpdateArgs["where"]
  data: CreateRecipeInput
}

export default async function updateRecipe(
  { where, data: { title, listIds } }: UpdateRecipeInput,
  ctx: Record<any, any> = {}
) {
  const recipe = await db.recipe.update({
    where,
    data: {
      title,
      lists: {
        connect: listIds.map((id) => ({ id })),
      },
    },
  })

  return recipe
}
