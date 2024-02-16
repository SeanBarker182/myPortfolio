import type { NextPage } from "next";
import Head from "next/head";
import ImageGallery from "react-image-gallery";

const imgCount = 36;
export async function getStaticProps() {
  return {
    props: {},
  };
}

export const Metadata = {
  title: "New House",
  description: "New House",
  url: "https://seanbarker.dev/house",
  image: "https://seanbarker.dev/images/house/medium/0.webp",
  imageType: "image/webp",
  imageWidth: 600,
  imageHeight: 400,
  imageAlt: "New House",
};

const House: NextPage = () => {
  return (
    <>
      <Head>
        <title>New House</title>
        <link rel="icon" href="/favicon.ico" />
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
