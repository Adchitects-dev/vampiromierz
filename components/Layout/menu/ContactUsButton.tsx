const ContactUsButton = () => {
  // add style to button contact-us
  return (
    <>
      <button className="rectangle">
        <span className="contact-us">Contact us</span>
      </button>
      <style jsx>{`
        .rectangle {
          background-color: #dac2f2;
          border-radius: 24px;
          width: 192px;
          height: 48px;
          cursor: pointer;
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
export default ContactUsButton
