import db from "db"

import { CreateRecipeInput } from "app/recipes/types"

export default async function createRecipe(
  { title, listIds }: CreateRecipeInput,
  ctx: Record<any, any> = {}
) {
  const recipe = await db.recipe.create({
    data: {
      title,
      lists: {
        connect: listIds.map((id) => ({ id })),
      },
    },
  })

  return recipe
}
