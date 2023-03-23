import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Feed from 'src/components/Feed'


const Home: NextPage = () => {
  /* const { data: sessionData } = useSession(); */
  
  const hello = api.post.getAll.useQuery({ categoryId: "design"});
  console.log(hello,"Post Data from test");

  return (
    <>
      <Head>
        <link rel="stylesheet prefetch" href="https://cdn.rawgit.com/mfd/e7842774e037edf15919037594a79b2b/raw/665bdfc532094318449f1010323c84013d5af953/graphik.css" />
        <title>Join Nova Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="" />
      </Head>
      <Feed />
    </>
  );
};

export default Home;
