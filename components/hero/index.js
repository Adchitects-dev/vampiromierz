import Image from "next/image"

const HeroIndex = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "green" }}>
      <p>In oculis quidem rerum facilis est et aperta.</p>
      <Image
        alt="hero_image"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Europe_satellite_globe.jpg"
        width={300}
        height={300}
      />
    </div>
  )
}

export default HeroIndex
