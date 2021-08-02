import Navbar from "../components/navbar";
import HotPost from "../components/hotpost";

export async function getServerSideProps() {
  const reqHot = await fetch(
    process.env.APIURL + "/posts?_where[hot]=true&_sort=id:DESC"
  );
  const resHot = await reqHot.json();

  return {
    props: {
      resHot: resHot,
    },
  };
}

export default function Home({ resHot }) {
  return (
    <div className="">
      <Navbar />

      <main className="max-w-6xl px-4 mx-auto grid grid-cols-3 mt-48">
        <div className="col-span-2 border-r border-gray-300 pr-6">
          <h3 className="font-bold text-gray-800">Hot News</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-4">
            {resHot.map(({ id, ...otherProps }) => (
              <HotPost key={id} {...otherProps} />
            ))}
          </div>
        </div>
        <div className="pl-4">
          <h3 className="font-bold text-gray-800">Latest Update</h3>
        </div>
      </main>
    </div>
  );
}
