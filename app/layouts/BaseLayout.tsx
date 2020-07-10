import Header from "app/components/Header"

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BaseLayout
