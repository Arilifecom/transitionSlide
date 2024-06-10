import TransitionEffect from "@/compornents/transitionEffect";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="grid place-items-center items-center text-dark w-full h-[70vh]">
        <h1 className="text-8xl">I am Ari!</h1>
      </main>
    </>
  );
};

export default about;