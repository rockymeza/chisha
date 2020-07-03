import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import getList from "app/lists/queries/getList"
import updateList from "app/lists/mutations/updateList"
import ListForm from "app/lists/components/ListForm"

export const EditList = () => {
  const router = useRouter()
  const listId = useParam("listId", "number")
  const [list, { mutate }] = useQuery(getList, { where: { id: listId } })

  return (
    <div>
      <h1>Edit List {list.id}</h1>

      <ListForm
        initialValues={{
          title: list.title,
        }}
        onSubmit={async (data) => {
          try {
            const updated = await updateList({
              where: { id: list.id },
              data,
              // this is annoying
              include: { recipes: true },
            })
            mutate(updated)
            router.push("/lists/[listId]", `/lists/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating list " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditListPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Edit List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <EditList />
        </Suspense>

        <p>
          {
            <Link href="/lists">
              <a>Lists</a>
            </Link>
          }
        </p>
      </main>
    </div>
  )
}

export default EditListPage
