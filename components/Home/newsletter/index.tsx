import ContentLayout from "../../ContentLayout"
import SubmitContainer from "./SubmitContainer"

const NewsletterIndex = () => {
  return (
    <ContentLayout>
      <div style={{ width: 624 }}>
        <p className="sign-up-for-newslett" style={{ marginBottom: 64 }}>
          Sign up for Newsletter
        </p>

        <SubmitContainer />

        <p className="thank-you-for-signin" style={{ marginTop: 48 }}>
          Thank you for signing up for the Breally newsletter.
        </p>

        <style jsx>{`
          .sign-up-for-newslett {
            color: #231e1e;
            font-family: Inter;
            font-size: 40px;
            line-height: 56px;
            width: 624px;
            text-align: center;

            font-weight: 500;
          }

          .thank-you-for-signin {
            color: #5edc4b;
            font-family: Inter;
            font-size: 14px;
            line-height: 22px;
            width: 624px;
            text-align: center;
          }
        `}</style>
      </div>
    </ContentLayout>
  )
}

export default NewsletterIndex
