import type { NextPage } from "next"
import Head from "next/head"

import MenuIndex from "../components/Home/menu"
import HeroIndex from "../components/Home/hero"
import TestimonialIndex from "../components/Home/testimonial"
import NewsletterIndex from "../components/Home/newsletter"

import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div style={{marginTop: 24}}>
      <Head>
        <title>Brelly - homepage</title>
      </Head>

      <main>
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
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

export default Home
