import db from "db"

export type CreateRecipeInput = {
  title: string
  listIds: number[]
}
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
