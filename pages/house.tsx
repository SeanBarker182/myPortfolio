import type { NextPage } from "next";
import Head from "next/head";
import ImageGallery from "react-image-gallery";

const imgCount = 36;
export async function getStaticProps() {
  return {
    props: {},
  };
}

const House: NextPage = () => {
  return (
    <>
      <Head>
        <title>New House</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="image" />
        <meta property="og:url" content="https://seanbarker.dev/house" />
        <meta
          property="og:image"
          content="https://seanbarker.dev/images/house/medium/0.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://seanbarker.dev/images/house/medium/0.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="New House" />
      </Head>

      <ImageGallery
        items={Array.from({ length: imgCount }).map((_, i) => ({
          original: `/images/house/large/${i}.webp`,
          thumbnail: `/images/house/thumb/${i}.webp`,
        }))}
      />
    </>
  );
};

const Code: React.FC<{
  children: string;
  selfClose?: boolean;
  closingTag?: boolean;
  lnNum: number;
  indent?: number;
}> = ({
  lnNum = 1,
  indent = 0,
  selfClose = true,
  closingTag = false,
  children,
}) => (
  <code className="flex items-center font-mono text-lg text-yellow-400">
    <div className="mr-4 text-sm text-slate-400">{lnNum}</div>
    <span className="text-gray-50 text-xl" style={{ marginLeft: indent * 16 }}>
      {closingTag ? "</" : "<"}
    </span>
    {children}&nbsp;
    <span className="text-slate-50 text-xl">{selfClose ? "/>" : ">"}</span>
  </code>
);

export default House;
