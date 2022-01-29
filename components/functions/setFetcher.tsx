type Props = {
  url: string
  body?: object
  method?: string
  headers?: Headers
}

export default async function setFetcher({
  url = "",
  body = {},
  method = "POST",
  headers,
}: Props) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(body), // body data type must match "Content-Type" header
    headers,
  })

  if (response.status === 400) {
    return new Error("Błędny adres mailowy")
  }

  return response.json()
}
