import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
 
export default function Layout({ children }:any) {
  return (
    <div className="relative bg-white">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <main className="pt-10 w-full">{children}</main>
      </div>
    </div>
  )
}