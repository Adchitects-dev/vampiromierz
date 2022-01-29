import { SetStateAction, useCallback, useContext, useState } from "react"
import { HeadersContext } from "../../../pages/[url]"
import { getHeader } from "../../functions/getDataSSG"
import setFetcher from "../../functions/setFetcher"
import { checkIsError } from "./functions"

type State = {
  newslett: string
  setNewslett: React.Dispatch<SetStateAction<string>>
  message?: string
  setMessage: React.Dispatch<SetStateAction<string>>
}

const BasicInput = ({ message, setMessage, newslett, setNewslett }: State) => {
  // we could upgrade this handleChange with watcher (timeout setter) with useRef as a tempValue
  // that would prevent mass rerender on every key up
  const handleChange = (e) => {
    setNewslett(e.target.value)
    if (message) setMessage("")
  }

  return (
    <>
      <input
        className="rectangle"
        placeholder="Type your email"
        style={{ flexGrow: 1, marginRight: 16 }}
        value={newslett}
        onChange={handleChange}
      />
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

type Response = {
  data?: object
  message: string
  error: string
}
const BasicButton = ({ setMessage, newslett, setNewslett }: State) => {
  const { username, password } = useContext(HeadersContext)

  const handleClick = useCallback(() => {
    const headers = getHeader(username, password)

    setFetcher({
      url: `https://adchitects-cms.herokuapp.com/newsletter`,
      body: { email: newslett },
      method: "POST",
      headers,
    }).then(({ data, message, error }: Response) => {
      setMessage(message)
    })

    // .catch((error) => console.error(error))

    // console.log(res)
    // if (newslett) setNewslett("olaboga")
  }, [newslett, username, password, setMessage])

  return (
    <div>
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
    </div>
  )
}

type MessageType = {
  message: string
}
const Message = ({ message }: MessageType) => {
  if (!message) return null

  return (
    <p className="thank-you-for-signin" style={{ marginTop: 48 }}>
      {message}
      <style jsx>{`
        .thank-you-for-signin {
          color: ${checkIsError(message) ? "red" : "#5edc4b"};
          font-family: Inter;
          font-size: 14px;
          line-height: 22px;
          width: 624px;
          text-align: center;
        }
      `}</style>
    </p>
  )
}

const SubmitContainer = () => {
  const [newslett, setNewslett] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  return (
    <>
      <div style={{ display: "flex" }}>
        <BasicInput {...{ message, setMessage, newslett, setNewslett }} />
        <BasicButton {...{ message, setMessage, newslett, setNewslett }} />
      </div>
      <Message {...{ message }} />
      <style jsx>{`
        .input-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export default SubmitContainer
