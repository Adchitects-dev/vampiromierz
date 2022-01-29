import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { createContext } from "react"
import { getPage, getPaths } from "../components/functions/getDataSSG"
import Layout from "../components/Layout"
import PageComponent from "../components/Pages/PageComponent"
import Custom404 from "./404"

type Props = {
  page: {
    url: string
    id: string
    notFound?: Boolean // when nothing returned
    sections: Array<{ [x: string]: any }>
  }
  pages: Array<{
    params: { url: string; id: string; sections: Array<{ [x: string]: any }> }
  }>
  children: React.ReactNode
  username: string
  password: string
}

export const HeadersContext = createContext(null)

const Page: NextPage = (props: Props) => {
  const { page, pages, username, password } = props

  if (!page || page?.notFound) return <Custom404 {...{ pages }} />

  return (
    <div>
      <Layout {...{ pages }}>
        <HeadersContext.Provider value={{ username, password }}>
          <PageComponent {...{ page }} />
        </HeadersContext.Provider>
      </Layout>

      {/* default font */}
      <style global jsx>{`
        * {
          font-family: Inter;
          font-weight: 400;
        }
      `}</style>
    </div>
  )
}

export default Page

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // data for pages
  const paths = await getPaths()

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// static generate page to get all language options only with one fetch by server
export const getStaticProps: GetStaticProps = async () => {
  const username = process.env.LOGIN_USER
  const password = process.env.LOGIN_PASS

  // data for newsletter
  const pages = await getPaths()

  // we need to depack pages and get static index page
  const indexPage = pages.filter(({ params: { url } }) => url === "/")[0].params

  // data for page
  const page = await getPage(indexPage)

  return {
    props: { page, pages, username, password },
  }
}
