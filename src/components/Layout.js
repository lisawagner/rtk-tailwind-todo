import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
    <div className="w-screen h-screen bg-slate-100">
      <Header />
      <main className="container mx-auto px-3 md:px-5 max-w-5xl pt-10 md:pt-12 ">
        <Outlet />
      </main>
    </div>
  )
}
export default Layout