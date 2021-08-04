import { useEffect, useState } from "react";
import Link from "next/link";
import { dateFormat } from "../utils/dateformat";

export default function Navbar({ scroll }) {
  useEffect(async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories");
    const data = await res.json();
    setCategories(data);
  }, []);
  const [categories, setCategories] = useState([]);
  return (
    <nav className="fixed w-full top-0 bg-white backdrop-blur-sm backdrop-filter bg-opacity-40">
      <div
        className={`${
          scroll ? `transform -translate-y-60 absolute` : `static`
        } max-w-6xl px-4 mx-auto py-5 flex justify-between place-items-center duration-300`}
      >
        <div className="flex w-16 justify-between">
          <svg
            className="w-5 h-5 text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="w-5 h-5 text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <Link href="/">
          <div className="font-serif text-gray-800 text-xl cursor-pointer hover:text-gray-400 duration-200">
            Corner Football
          </div>
        </Link>

        <div className="">
          <div className="border border-gray-800 py-1.5 px-3 text-xs font-bold cursor-pointer hover:bg-gray-800 hover:text-white duration-200">
            SUBSCRIBE
          </div>
        </div>
      </div>

      <div
        className={`${
          scroll
            ? `backdrop-filter text-gray-800 backdrop-blur-2xl bg-gray-300 bg-opacity-50`
            : `bg-gradient-to-r from-gray-900 text-white to-gray-700 backdrop-blur-none`
        } duration-500`}
      >
        <div className="max-w-6xl mx-auto flex place-items-center overflow-x-auto px-4 py-5 ">
          <div className="pr-3">
            <div className="text-xs font-semibold mb-0.5 w-24 pr-1 leading-relaxed">
              {dateFormat(new Date().toISOString())}
            </div>
          </div>
          {categories.map((cat) => (
            <Link key={cat.name} href={`/category/${cat.slug}`}>
              <div className="text-xs font-sans px-4 cursor-pointer">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
