import { Link } from "blitz"
import { List } from "db"

type Props = {
  lists: List[]
}

const Lists = ({ lists }) => {
  return (
    <ul>
      {lists.map((list) => (
        <li key={list.id}>
          <Link href="/lists/[listId]" as={`/lists/${list.id}`}>
            <a>{list.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Lists
