import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import MenuIndex from "../components/Layout/menu"
import HeroIndex from "../components/Home/hero"
import TestimonialIndex from "../components/Home/testimonial"
import NewsletterIndex from "../components/Home/newsletter"

import styles from "../styles/Home.module.css"

const Home: NextPage = ({ page }) => {
  console.log({ page })
  return (
    <div>
      <Head>
        <title>Brelly - homepage</title>
      </Head>

      <main style={{ padding: "24px 0 128px 0" }}>
        <MenuIndex />
        {/* <div style={{ margin: "0 172px 0 172px" }}> */}
        <HeroIndex />
        <TestimonialIndex />
        <NewsletterIndex />
        {/* </div> */}
      </main>
      <style global jsx>{`
        * {
          font-family: Inter;
          font-weight: 400;
        }
      `}</style>
    </div>
  )
}

// static generate page to get all language options only with one fetch by server
export const getStaticProps: GetStaticProps = async (context) => {
  const username = process.env.LOGIN_USER
  const password = process.env.LOGIN_PASS
  const basicAuth = Buffer.from(username + ":" + password).toString("base64")
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Basic " + basicAuth,
  })

  const res = await fetch(`https://1adchitects-cms.herokuapp.com/pages`, {
    headers,
    method: "GET",
  })

  const pages = [
    {
      url: "/",
      id: "MPz3uDxgKR",
    },
    {
      url: "/solutions",
      id: "BsX5PfVVxl",
    },
    {
      url: "/about",
      id: "RsQPoaZWdp",
    },
  ]

  const page = pages.find(({ url }) => url === "/")

  // const pages = await res.json()
  console.log("data", page)

  return {
    props: { page },
    revalidate: 24 * 60 * 60 * 7, // refetch data once a week
  }
}

export default Home
