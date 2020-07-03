import * as React from "react"
import { Head, Link, useRouter, BlitzPage } from "blitz"
import createRecipe from "app/recipes/mutations/createRecipe"
import RecipeForm from "app/recipes/components/RecipeForm"

const NewRecipePage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>New Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create New Recipe </h1>

        <React.Suspense fallback={null}>
          <RecipeForm
            initialValues={{}}
            onSubmit={async (input) => {
              try {
                const recipe = await createRecipe(input)
                router.push("/recipes/[recipeId]", `/recipes/${recipe.id}`)
              } catch (error) {
                alert("Error creating recipe " + JSON.stringify(error, null, 2))
              }
            }}
          />
        </React.Suspense>

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

export default NewRecipePage
