import { Link } from "blitz"

const Header = () => {
  return (
    <div className="flex-1 flex flex-col">
      <nav className="px-4 flex justify-between bg-white h-16 border-b-2 items-center">
        {/* top bar left */}
        <div>吃啥</div>

        <ul className="flex">
          <li>
            <Link href="/lists" as="/lists">
              <a>Lists</a>
            </Link>
          </li>
          <li>
            <Link href="/recipes" as="/recipes">
              <a>Recipes</a>
            </Link>
          </li>
        </ul>

        {/* to bar right  */}
        <ul className="flex">
          <li className="h-10 w-10">
            <img
              className="h-full w-full rounded-full mx-auto"
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="profile woman"
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
