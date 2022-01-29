import ContentLayout from "../../ContentLayout"
import SubmitContainer from "./SubmitContainer"

const NewsletterIndex = () => {
  return (
    <ContentLayout margin={128}>
      <div>
        <p className="sign-up-for-newslett" style={{ marginBottom: 64 }}>
          Sign up for Newsletter
        </p>

        <SubmitContainer />

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
        `}</style>
      </div>
    </ContentLayout>
  )
}

export default NewsletterIndex
