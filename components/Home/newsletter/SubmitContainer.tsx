import { SetStateAction, useCallback, useContext, useState } from "react"
import { HeadersContext } from "../../../pages/[url]"
import { getHeader } from "../../functions/getDataSSG"
import setFetcher from "../../functions/setFetcher"

type State = {
  newslett: string
  setNewslett: React.Dispatch<SetStateAction<string>>
}

const BasicInput = ({ newslett, setNewslett }: State) => {
  // we could upgrade this handleChange with watcher (timeout setter) with useRef as a tempValue
  // that would prevent mass rerender on every key up
  const handleChange = (e) => setNewslett(e.target.value)

  return (
    <>
      <input
        className="rectangle"
        placeholder="Type your email"
        style={{ flexGrow: 1, marginRight: 16 }}
        value={newslett}
        onChange={handleChange}
      />
      {/* we could add email validate info here */}
      <style jsx>{`
        input {
          background-color: #f1f0f0;
          border-radius: 24px;
          width: 416px;
          height: 48px;
          padding-left: 32px;
        }
        input::placeholder {
          color: #231e1e;
          font-family: Inter;
          font-size: 16px;
          line-height: 19px;
          text-align: left;
        }
        input[value] {
          color: #231e1e;
          font-family: Inter;
          font-size: 16px;
          line-height: 19px;
          text-align: left;
        }
      `}</style>
    </>
  )
}

const BasicButton = ({ newslett, setNewslett }: State) => {
  const { username, password } = useContext(HeadersContext)

  const handleClick = useCallback(() => {
    const headers = getHeader(username, password)
    try {
      setFetcher({
        url: `https://adchitects-cms.herokuapp.com/newsletter`,
        body: { email: newslett },
        method: "POST",
        headers,
      }).then(({ data, message, error }) => {
        console.log(data, message, error)
      })
    } catch (error) {
      console.log(error)
    }

    // .catch((error) => console.error(error))

    // console.log(res)
    // if (newslett) setNewslett("olaboga")
  }, [newslett, setNewslett, setFetcher, username, password])

  return (
    <>
      {/* we can make this button visibility to disabled, if email is wrong */}
      <button className="rectangle" onClick={handleClick}>
        <span className="contact-us">Submit</span>
      </button>
      <style jsx>{`
        .rectangle {
          background-color: #dac2f2;
          border-radius: 24px;
          width: 192px;
          height: 48px;
        }

        .contact-us {
          color: #231e1e;
          font-family: Inter;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
        }
      `}</style>
    </>
  )
}

const SubmitContainer = () => {
  const [newslett, setNewslett] = useState<string>("")

  console.log(newslett)

  return (
    <div style={{ display: "flex" }}>
      <BasicInput {...{ newslett, setNewslett }} />
      <BasicButton {...{ newslett, setNewslett }} />
    </div>
  )
}

export default SubmitContainer
