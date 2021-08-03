function HotPost({ category, title, thumbnail, headline }) {
  return (
    <div className="">
      <div className="w-full">
        <img
          className="object-cover h-60"
          src={process.env.NEXT_PUBLIC_APIURL + thumbnail.formats.medium.url}
          alt=""
        />
      </div>
      <div className="flex place-items-center">
        <div className="text-xs text-white px-2 py-2 bg-gray-800 my-3 mr-3">
          {category.name}
        </div>
        <div className="text-xs">July 30, 2021</div>
      </div>
      <div className="">
        <div className="text-2xl font-bold font-serif text-gray-800 mb-2 line-clamp-2">
          {title}
        </div>
        <div className="text-xs text-gray-500 mb-2 line-clamp-4">
          {headline}
        </div>
        <div className="underline text-xs text-gray-800">Continue reading</div>
      </div>
    </div>
  );
}

export default HotPost;
