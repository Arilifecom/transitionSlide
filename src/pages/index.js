import TransitionEffect from "@/compornents/TransitionEffect";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="grid place-items-center items-center text-dark w-full h-[70vh]">
        <h1 className="text-8xl">Hello,</h1>
      </main>
    </>
  );
}
