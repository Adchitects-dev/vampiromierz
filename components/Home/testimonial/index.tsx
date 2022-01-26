import ContentLayout from "../../ContentLayout"

const TestimonialIndex = () => {
  return (
    <div
      className="background"
      style={{ display: "flex", alignItems: "center" }}
    >
      <ContentLayout>
        <div
          style={{
            margin: "0 172",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-around",
          }}
        >
          <p className="shape">&quot;</p>
          <p className="torquatos-nostros-q" style={{ color: "#F1F0F0" }}>
            Torquatos nostros? quos dolores eos, qui studiose antiqua
            persequeris, claris et quasi naturalem. In quo enim inter mediocrem
            animadversionem atque insitam in malis dolor, non numquam. At vero
            eos et dolore suo sanciret.
          </p>
          <p className="john-doe-street-art" style={{ color: "#989898" }}>
            John Doe, Street Artist
          </p>
        </div>
      </ContentLayout>
      <style jsx>{`
        .background {
          background-color: #231e1e;
          height: 613px;
        }

        .shape {
          // background-color: #dac2f2;
          color: #dac2f2;
          border: 1px solid white;
          width: 48px;
          height: 40px;
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
