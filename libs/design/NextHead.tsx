import Head from "next/head";

interface NextHead {
  title: string;
}

export default function NextHead({ title }: NextHead) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
