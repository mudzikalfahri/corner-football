import Head from "next/head";
import { useEffect } from "react";
import { dateFormat } from "../../utils/dateformat";
import ReactMarkdown from "react-markdown";
import SkeletonPost from "../../components/skeletonpost";

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    process.env.NEXT_PUBLIC_APIURL + `/posts?slug=${slug}`
  );
  const data = await res.json();
  const post = data[0];

  if (!data.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

function DetailPost({ post, setScroll }) {
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

  if (!post) {
    return <SkeletonPost />;
  }

  return (
    <>
      <Head>
        <title>CF - {post.title}</title>
        <link rel="icon" href="https://i.ibb.co/wRYpkr8/volleyball.png" />
      </Head>
      <main className="max-w-6xl px-4 mx-auto mt-48">
        <div className="md:w-2/3 mx-auto">
          <div className="flex">
            <div className="text-lg text-white px-3 py-2 bg-gray-800 mb-3">
              {post.category.name}
            </div>
          </div>
          <h1 className="text-5xl text-gray-800 font-serif font-bold mb-8">
            {post.title}
          </h1>
          <p className="text-gray-700 my-5 text-lg">{post.headline}</p>
          <p className="text-md text-gray-400 mb-1">
            {dateFormat(post.published_at)}
          </p>
          <img src={post.thumbnail} alt="" className="w-full object-cover" />

          <ReactMarkdown className="text-gray-700 my-8 text-lg">
            {post.content}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default DetailPost;
