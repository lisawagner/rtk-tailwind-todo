import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-3 md:px-5 max-w-5xl pt-10 md:pt-12 ">
        <Outlet />
      </main>
    </>
  )
}
export default Layout