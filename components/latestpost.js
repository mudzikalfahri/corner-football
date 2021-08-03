import { dateFormat } from "../utils/dateformat";
import Link from "next/link";

function LatestPost({ category, title, thumbnail, published_at, slug }) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="flex mb-4 cursor-pointer">
        <img
          src={process.env.NEXT_PUBLIC_APIURL + thumbnail.formats.small.url}
          alt=""
          className="w-24 h-24 object-cover"
        />
        <div className="ml-2 flex-col flex justify-between">
          <p className="text-xs text-gray-400">{dateFormat(published_at)}</p>
          <p className="font-serif font-bold text-lg line-clamp-1">{title}</p>
          <div className="flex">
            <div className="text-xs text-white px-2 py-2 bg-gray-800 my-1">
              {category.name}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LatestPost;
