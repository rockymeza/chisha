import { Head, Link } from "blitz"
import BaseLayout from "app/layouts/BaseLayout"

const Home = () => (
  <BaseLayout>
    <div className="container">
      <Head>
        <title>吃啥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>吃啥</h1>
        <ul>
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
      </main>
    </div>
  </BaseLayout>
)

export default Home
