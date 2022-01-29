export function getHeader(username, password) {
  const basicAuth = Buffer.from(`${username}:${password}`).toString("base64")

  return new Headers({
    "Content-Type": "application/json",
    Authorization: "Basic " + basicAuth,
  })
}

// we dont need to catch error here, cuz we will build static pages locally
export async function getPaths() {
  const username = process.env.LOGIN_USER
  const password = process.env.LOGIN_PASS
  const headers = getHeader(username, password)

  const api = process.env.API

  const res_pages = await fetch(`${api}/pages`, {
    headers,
    method: "GET",
  })

  const pages = await res_pages.json()
  // console.log(pages)

  // const pages = [
  //   {
  //     url: "/",
  //     id: "MPz3uDxgKR",
  //   },
  //   {
  //     url: "/solutions",
  //     id: "BsX5PfVVxl",
  //   },
  //   {
  //     url: "/about",
  //     id: "RsQPoaZWdp",
  //   },
  // ]

  // Get the paths we want to pre-render based on response
  return pages.map((page) => ({
    params: page,
  }))
}

// we dont need to catch error here, cuz we will build static pages locally
export async function getPage(params) {
  const username = process.env.LOGIN_USER
  const password = process.env.LOGIN_PASS
  const headers = getHeader(username, password)

  const api = process.env.API

  const res_page = await fetch(
    `${api}/page/:${params.id}`,
    {
      headers,
      method: "GET",
    }
  )

  const page = await res_page.json()

  // const page = {
  //   url: "/",
  //   id: "DxgKRMPz3u",
  //   sections: [
  //     {
  //       type: "hero",
  //       text: "lorem ipsum",
  //       img: "https://pl.wikipedia.org/wiki/JavaScript#/media/Plik:Unofficial_JavaScript_logo_2.svg",
  //     },
  //     {
  //       type: "testimonial",
  //       text: "lorem ipsum",
  //       author: "John Doe",
  //     },
  //     {
  //       type: "newsletter",
  //     },
  //   ],
  // }

  if (!page || page.message)
    return {
      notFound: true,
    }

  // Get proper page
  return page
}
