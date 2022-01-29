import Image from "next/image"
import Link from "next/link"

type Logo = {
  url?: string
  id?: string
}

const Logo = ({ url, id }: Logo) => {
  return (
    <Link href="/">
      <a style={{ marginRight: 97 }}>
        <Image width={89} height={32} alt="homepage" src="/logo.svg" />
      </a>
    </Link>
  )
}

export default Logo
