import { GetStaticProps } from "next"
import { getPaths } from "../components/functions/getDataSSG"
import Layout from "../components/Layout"

type Error = {
  pages: Array<{
    params: { url: string; id: string; sections: Array<{ [x: string]: any }> }
  }>
}

export default function Custom404({ pages }: Error) {
  return (
    // <Layout {...{ pages }}>
      <h1>404 - Page Not Found</h1>
    // </Layout>
  )
}

// static generate page to get all language options only with one fetch by server
export const getStaticProps: GetStaticProps = async () => {
  // data for newsletter
  const pages = await getPaths()

  return {
    props: { pages },
  }
}
