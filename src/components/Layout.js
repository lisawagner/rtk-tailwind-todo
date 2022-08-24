import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-2 max-w-5xl pt-10 md:pt-12 md:px-5">
        <Outlet />
      </main>
    </>
  )
}
export default Layout