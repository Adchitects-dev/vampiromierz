import Image from "next/image"
import ContentLayout from "../../ContentLayout"

type Testimorial = {
  text: string
  author: string
}

const TestimonialIndex = ({ text, author }: Testimorial) => {
  return (
    <div className="background">
      <ContentLayout>
        <div className="content-box">
          <p className="shape">
            {/* Was next Image before, but it cant be used in next build export */}
            <img
              className="shape"
              src="/quotation-mark.svg"
              width={48}
              height={40}
              // layout="fixed"
              alt="quotation-mark"
            />
          </p>
          <p className="torquatos-nostros-q">{text}</p>
          <p className="john-doe-street-art">{author}</p>
        </div>
      </ContentLayout>
      <style jsx>{`
        .content-box {
          padding: 128px 0;
          margin: 0 172px;
          display: flex;
          flex-direction: column;
          justify-content: flex-around;
        }
        .background {
          background-color: #231e1e;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 152px;
        }

        .shape {
          color: #dac2f2;
        }

        .torquatos-nostros-q {
          color: #f1f0f0;
          font-family: Inter;
          font-size: 24px;
          line-height: 40px;
          width: 948px;
          text-align: left;
        }

        .john-doe-street-art {
          color: #989898;
          font-family: Inter;
          font-size: 24px;
          line-height: 29px;
          text-align: left;
        }
      `}</style>
    </div>
  )
}

export default TestimonialIndex
