import type { GetStaticProps } from "next"
import { getHeader, getPage, getPaths } from "../components/functions/getDataSSG"

// this is a workaround for dynamic paths
import Index from "./[url]"

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

export default Index
