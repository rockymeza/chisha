import React from "react"
import { Head, Link, useRouter, BlitzPage } from "blitz"
import BaseLayout from "app/layouts/BaseLayout"
import createList from "app/lists/mutations/createList"
import ListForm from "app/lists/components/ListForm"

const NewListPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <BaseLayout>
      <Head>
        <title>New List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create New List</h1>

        <ListForm
          initialValues={{}}
          onSubmit={async (values) => {
            try {
              const list = await createList({ data: values })
              router.push("/lists/[listId]", `/lists/${list.id}`)
            } catch (error) {
              alert("Error creating list " + JSON.stringify(error, null, 2))
            }
          }}
        />

        <p>
          {
            <Link href="/lists">
              <a>Lists</a>
            </Link>
          }
        </p>
      </main>
    </BaseLayout>
  )
}

export default NewListPage
