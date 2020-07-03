import React, { Suspense } from "react"
import { Head, Link, useQuery, BlitzPage } from "blitz"
import getRecipes from "app/recipes/queries/getRecipes"
import Recipes from "app/recipes/components/Recipes"

export const RecipesList = () => {
  const [recipes] = useQuery(getRecipes, { orderBy: { id: "desc" } })

  return <Recipes recipes={recipes} />
}

const RecipesPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Recipes</h1>

        <p>
          {
            <Link href="/recipes/new">
              <a>Create Recipe</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <RecipesList />
        </Suspense>
      </main>
    </div>
  )
}

export default RecipesPage
