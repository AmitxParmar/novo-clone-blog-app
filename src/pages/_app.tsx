import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";

import { PostsProvider } from "~/context/post_context";
import Layout from "~/components/Layout";

import "~/styles/globals.css";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <PostsProvider>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </PostsProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
