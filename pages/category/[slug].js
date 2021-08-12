import Head from "next/head";
import HotPost from "../../components/hotpost";

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories");
  const categories = await res.json();

  const paths = categories.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    process.env.NEXT_PUBLIC_APIURL + `/posts?category.slug=${slug}`
  );
  const data = await res.json();
  const single = data[0];

  return {
    props: {
      data,
      single,
    },
    revalidate: 10,
  };
}

function categoryPage({ data, single, setScroll }) {
  const scrollFunc = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <>
      <Head>
        <title>CF - {single.category.name}</title>
        <link rel="icon" href="https://i.ibb.co/wRYpkr8/volleyball.png" />
      </Head>
      <div className="max-w-6xl px-4 mx-auto mt-44 mb-10 text-center border border-gray-400 py-2 text-gray-800">
        <h1>Search by Category:</h1>
        <h1 className="font-sans text-2xl font-bold">{single.category.name}</h1>
      </div>
      <main className="max-w-6xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-6 mt-4 mb-20">
        {data.map(({ idx, ...others }) => (
          <HotPost key={idx} {...others} />
        ))}
      </main>
    </>
  );
}
export default categoryPage;
