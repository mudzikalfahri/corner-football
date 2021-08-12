import HotPost from "../components/hotpost";
import { useEffect, useState } from "react";
import Head from "next/head";
import LatestPost from "../components/latestpost";

export async function getStaticProps() {
  const reqHot = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/posts?_where[hot]=true&_sort=id:DESC"
  );
  const resHot = await reqHot.json();

  const reqLatest = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/posts?_where[hot]=false&_sort=id:DESC"
  );
  const resLatest = await reqLatest.json();

  return {
    props: {
      resHot: resHot,
      resLatest: resLatest,
    },
    revalidate: 10,
  };
}

export default function Home({ resHot, resLatest, setScroll }) {
  const [dataHot] = useState(resHot);
  const [dataLatest] = useState(resLatest);

  const scrollFunc = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  return (
    <>
      <Head>
        <title>Corner Football</title>
        <link rel="icon" href="https://i.ibb.co/wRYpkr8/volleyball.png" />
      </Head>
      <div className="">
        <main className="max-w-6xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 mt-48 mb-20">
          <div className="col-span-2 border-b md:border-b-0 md:border-r border-gray-300 pb-6 mb-6 md:pr-6">
            <h3 className="font-bold text-gray-800">Hot News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-6 mt-4">
              {dataHot.map(({ id, ...otherProps }) => (
                <HotPost key={id} {...otherProps} />
              ))}
            </div>
          </div>
          <div className="md:pl-4">
            <h3 className="font-bold text-gray-800">Latest Update</h3>
            <div className="mt-4">
              {dataLatest.map(({ id, ...otherProps }) => (
                <LatestPost key={id} {...otherProps} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
