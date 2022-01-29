import Link from "next/link"
import { useRouter } from "next/router"

type SinglePosition = {
  params: { url: string; id: string; sections: Array<{ [x: string]: any }> }
}
const SinglePosition = ({ params }) => {
  const url = params.url.replace("/", "")

  // we can use useRouter to set active one of selected pages
  const { pathname } = useRouter()

  // ignore home page (logo has already link to home)
  if (!url) return null

  // make a first char upperCase
  const label = url.charAt(0).toUpperCase() + url.slice(1)

  return (
    <>
      <Link href={url}>
        <a className="products">{label}</a>
      </Link>
      <style jsx>{`
        .products {
          color: #231e1e;
          font-family: Inter;
          font-size: 16px;
          line-height: 24px;
          text-align: left;
          margin-right: 48px;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

type Positions = {
  pages: Array<{
    params: { url: string; id: string; sections: Array<{ [x: string]: any }> }
  }>
}
const Positions = ({ pages }: Positions) => {
  return (
    <>
      {pages.map(({ params }) => (
        <SinglePosition key={params.id} {...{ params }} />
      ))}
    </>
  )
}

export default Positions
