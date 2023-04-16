import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-screen overflow-x-hidden selection:bg-amber-400 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
