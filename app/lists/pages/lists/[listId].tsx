import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import BaseLayout from "app/layouts/BaseLayout"
import getList from "app/lists/queries/getList"
import deleteList from "app/lists/mutations/deleteList"
import Recipes from "app/recipes/components/Recipes"

export const List = () => {
  const router = useRouter()
  const listId = useParam("listId", "number")
  const [list] = useQuery(getList, { where: { id: listId }, include: { recipes: true } })

  return (
    <div>
      <h1>{list.title}</h1>

      <h2>Recipes</h2>
      <Recipes recipes={list.recipes} />

      {
        <Link href="/lists/[listId]/edit" as={`/lists/${list.id}/edit`}>
          <a>Edit</a>
        </Link>
      }

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteList({ where: { id: list.id } })
            router.push("/lists")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowListPage: BlitzPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          {
            <Link href="/lists">
              <a>Lists</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <List />
        </Suspense>
      </main>
    </BaseLayout>
  )
}

export default ShowListPage
