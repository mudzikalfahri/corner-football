import Navbar from "../components/navbar"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>

      <main className="max-w-6xl px-4 mx-auto grid grid-cols-3 mt-8">
        <div className="col-span-2 border-r border-gray-300">
          <h3>
            Hot News
          </h3>
        </div>
        <div className="pl-4">
          <h3>
            Latest Update
          </h3>
        </div>
      </main>
    </div>
  )
}
