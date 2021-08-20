import { useEffect, useState } from "react";
import Link from "next/link";
import { dateFormat } from "../utils/dateformat";

export default function Navbar({ scroll }) {
  const [categories, setCategories] = useState([
    {
      _id: "610a9ead48cd781948c2505c",
      name: "Bundesliga",
      slug: "bundesliga",
      published_at: "2021-08-04T14:05:38.146Z",
      createdAt: "2021-08-04T14:05:33.966Z",
      updatedAt: "2021-08-04T14:05:38.262Z",
      __v: 0,
      id: "610a9ead48cd781948c2505c",
    },
    {
      _id: "610a9ebb48cd781948c2505d",
      name: "Eredivisie",
      slug: "eredivisie",
      published_at: "2021-08-04T14:05:50.587Z",
      createdAt: "2021-08-04T14:05:47.625Z",
      updatedAt: "2021-08-04T14:05:50.713Z",
      __v: 0,
      id: "610a9ebb48cd781948c2505d",
    },
    {
      _id: "610a9ec648cd781948c2505e",
      name: "La Liga",
      slug: "la-liga",
      published_at: "2021-08-04T14:06:00.704Z",
      createdAt: "2021-08-04T14:05:58.191Z",
      updatedAt: "2021-08-04T14:06:00.825Z",
      __v: 0,
      id: "610a9ec648cd781948c2505e",
    },
    {
      _id: "610a9ed048cd781948c2505f",
      name: "League 1",
      slug: "league-1",
      published_at: "2021-08-04T14:06:10.898Z",
      createdAt: "2021-08-04T14:06:08.336Z",
      updatedAt: "2021-08-04T14:06:11.026Z",
      __v: 0,
      id: "610a9ed048cd781948c2505f",
    },
    {
      _id: "610a9eda48cd781948c25060",
      name: "Premier League",
      slug: "premier-league",
      published_at: "2021-08-04T14:06:21.390Z",
      createdAt: "2021-08-04T14:06:18.966Z",
      updatedAt: "2021-08-04T14:06:21.821Z",
      __v: 0,
      id: "610a9eda48cd781948c25060",
    },
    {
      _id: "610a9ee648cd781948c25061",
      name: "Serie A",
      slug: "serie-a",
      published_at: "2021-08-04T14:06:33.561Z",
      createdAt: "2021-08-04T14:06:30.054Z",
      updatedAt: "2021-08-04T14:06:33.696Z",
      __v: 0,
      id: "610a9ee648cd781948c25061",
    },
    {
      _id: "610a9ef248cd781948c25062",
      name: "World News",
      slug: "world-news",
      published_at: "2021-08-04T14:06:45.554Z",
      createdAt: "2021-08-04T14:06:42.769Z",
      updatedAt: "2021-08-04T14:06:45.670Z",
      __v: 0,
      id: "610a9ef248cd781948c25062",
    },
  ]);
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
