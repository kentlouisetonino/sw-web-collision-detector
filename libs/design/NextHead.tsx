import Head from 'next/head'

interface NextHead {
  title: string
}

export default function NextHead({ title }: NextHead) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
