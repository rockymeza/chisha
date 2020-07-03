import React, { Suspense } from "react"
import { Head, Link, useQuery, BlitzPage } from "blitz"
import getLists from "app/lists/queries/getLists"
import Lists from "app/lists/components/Lists"

export const ListsList = () => {
  const [lists] = useQuery(getLists, { orderBy: { title: "asc" } })

  return <Lists lists={lists} />
}

const ListsPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Lists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Lists</h1>

        <p>
          {
            <Link href="/lists/new">
              <a>Create List</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ListsList />
        </Suspense>
      </main>
    </div>
  )
}

export default ListsPage
