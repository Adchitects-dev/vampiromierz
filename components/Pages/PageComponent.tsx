import Head from "next/head"
import HeroIndex from "../Home/hero"
import NewsletterIndex from "../Home/newsletter"
import TestimonialIndex from "../Home/testimonial"

const ProperComponent = ({ section }) => {
  switch (section.type) {
    case "hero":
      return <HeroIndex {...section} />

    case "testimonial":
      return <TestimonialIndex {...section} />

    case "newsletter":
      return <NewsletterIndex />

    default:
      return null
  }
}

type Page = {
  page: { url: string; id: string; sections: Array<{ [x: string]: any }> }
}
const PageComponent = ({ page }: Page) => {
  const subtitle = page.url === "/" ? "homepage" : page.url?.replace("/", "")

  return (
    <>
      <Head>
        <title>Brelly - {subtitle}</title>
      </Head>
      {page?.sections?.map((section) => (
        <ProperComponent key={section.type} {...{ section }} />
      ))}
    </>
  )
}

export default PageComponent
