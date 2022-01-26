import type { NextPage } from "next"
import Head from "next/head"

import MenuIndex from "../components/menu"
import HeroIndex from "../components/hero"
import TestimonialIndex from "../components/testimonial"
import NewsletterIndex from "../components/newsletter"

import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brelly - homepage</title>
      </Head>

      <main>
        <MenuIndex />
        <HeroIndex />
        <TestimonialIndex />
        <NewsletterIndex />
      </main>
    </div>
  )
}

export default Home
