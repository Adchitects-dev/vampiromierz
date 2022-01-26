const BasicInput = () => {
  return (
    <>
      {/* add placeholder */}
      <input
        className="rectangle"
        placeholder="Type your email"
        style={{ flexGrow: 1, marginRight: 16 }}
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
      `}</style>
    </>
  )
}

const BasicButton = () => {
  return (
    <>
      <button className="rectangle">
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
  return (
    <div style={{ display: "flex" }}>
      <BasicInput />
      <BasicButton />
    </div>
  )
}

export default SubmitContainer
