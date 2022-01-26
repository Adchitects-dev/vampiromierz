import Image from "next/image"
import ContentLayout from "../../ContentLayout"

const HeroIndex = () => {
  return (
    <ContentLayout>
      <div
        style={{
          display: "flex",
          margin: "127px 0 152px 0",
          justifyContent: "center",
          width: 1056,
          height: 384,
        }}
      >
        <p className="in-oculis-quidem-rer">
          In oculis quidem rerum facilis est et aperta.
        </p>

        <Image
          alt="hero_image"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Europe_satellite_globe.jpg"
          width={516}
          height={384}
          layout="fixed"
        />
      </div>

      <style jsx>{`
        .in-oculis-quidem-rer {
          color: #231e1e;
          font-family: Inter;
          font-size: 48px;
          line-height: 64px;
          width: 516px;
          text-align: left;

          font-weight: 500;
        }
      `}</style>
    </ContentLayout>
  )
}

export default HeroIndex
