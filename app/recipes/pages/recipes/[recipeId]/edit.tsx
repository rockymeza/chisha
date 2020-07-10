import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import BaseLayout from "app/layouts/BaseLayout"
import getRecipe from "app/recipes/queries/getRecipe"
import updateRecipe from "app/recipes/mutations/updateRecipe"
import RecipeForm from "app/recipes/components/RecipeForm"

export const EditRecipe = () => {
  const router = useRouter()
  const recipeId = useParam("recipeId", "number")
  const [recipe, { mutate }] = useQuery(getRecipe, {
    where: { id: recipeId },
    include: { lists: true },
  })

  return (
    <div>
      <h1>Edit Recipe {recipe.id}</h1>
      <pre>{JSON.stringify(recipe)}</pre>

      <RecipeForm
        initialValues={{
          title: recipe.title,
          listIds: recipe.lists.map(({ id }) => id),
        }}
        onSubmit={async (data) => {
          try {
            const updated = await updateRecipe({
              where: { id: recipe.id },
              data,
            })
            // @ts-ignore
            mutate(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push("/recipes/[recipeId]", `/recipes/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating recipe " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditRecipePage: BlitzPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Edit Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <EditRecipe />
        </Suspense>

        <p>
          {
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          }
        </p>
      </main>
    </BaseLayout>
  )
}

export default EditRecipePage
