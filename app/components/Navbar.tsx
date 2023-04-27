import Link from "next/link"
import Search from "./Search"
export default function Navbar() {
  return (
    <nav className="bg-slate-600">
      <h1 className="text-3xl ">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search />
    </nav>
  )
}
