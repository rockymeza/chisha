import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import getRecipe from "app/recipes/queries/getRecipe"
import updateRecipe from "app/recipes/mutations/updateRecipe"
import RecipeForm from "app/recipes/components/RecipeForm"

export const EditRecipe = () => {
  const router = useRouter()
  const recipeId = useParam("recipeId", "number")
  const [recipe, { mutate }] = useQuery(getRecipe, { where: { id: recipeId } })

  return (
    <div>
      <h1>Edit Recipe {recipe.id}</h1>
      <pre>{JSON.stringify(recipe)}</pre>

      <RecipeForm
        initialValues={recipe}
        onSubmit={async () => {
          try {
            const updated = await updateRecipe({
              where: { id: recipe.id },
              data: { name: "MyNewName" },
            })
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
    <div>
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
    </div>
  )
}

export default EditRecipePage
