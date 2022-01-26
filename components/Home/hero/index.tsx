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
        <div
          style={{
            fontWeight: 500,
            fontSize: 48,
            marginRight: 24,
            width: 516,
            height: 192,
          }}
        >
          <p>In oculis quidem</p>
          <p>rerum facilis est et</p>
          <p>aperta.</p>
        </div>

        <Image
          alt="hero_image"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Europe_satellite_globe.jpg"
          width={516}
          height={384}
          layout="fixed"
        />
      </div>
    </ContentLayout>
  )
}

export default HeroIndex
