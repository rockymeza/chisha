import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import BaseLayout from "app/layouts/BaseLayout"
import getRecipe from "app/recipes/queries/getRecipe"
import deleteRecipe from "app/recipes/mutations/deleteRecipe"
import Lists from "app/lists/components/Lists"

export const Recipe = () => {
  const router = useRouter()
  const recipeId = useParam("recipeId", "number")
  const [recipe] = useQuery(getRecipe, { where: { id: recipeId }, include: { lists: true } })

  return (
    <div>
      <h1>{recipe.title}</h1>

      <h2>Lists</h2>
      <Lists lists={recipe.lists} />

      {
        <Link href="/recipes/[recipeId]/edit" as={`/recipes/${recipe.id}/edit`}>
          <a>Edit</a>
        </Link>
      }

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteRecipe({ where: { id: recipe.id } })
            router.push("/recipes")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowRecipePage: BlitzPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          {
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Recipe />
        </Suspense>
      </main>
    </BaseLayout>
  )
}

export default ShowRecipePage
