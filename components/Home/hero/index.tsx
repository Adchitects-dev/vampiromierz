import Image from "next/image"
import ContentLayout from "../../ContentLayout"

const HeroIndex = ({ text, img }) => {
  return (
    <ContentLayout margin={127}>
      <div className="box-content">
        <p className="in-oculis-quidem-rer">{text}</p>

        {/* I got problem here, cuz i dont see proper link for image, its just link for LightBox  */}
        {/* Proper link below */}
        <div className="image">
          {/* Was next Image before, but it cant be used in next build export */}
          <img
            className="rectangle"
            alt="Here should be a image"
            src={img}
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
            width={516}
            height={384}
            // layout="fixed"
          />
        </div>

        <style jsx>{`
          .box-content {
            display: flex;
            justify-content: center;
            width: 1056;
            height: 384;
          }
          .rectangle {
            background-image: url(https://marvel-live.freetls.fastly.net/canvas/2021/12/6200eedd9afa4115a6b4fe0b5e611b5f?quality=95&fake=.png);
            background-size: 100%;
            width: 516px;
            height: 384px;
          }
          .in-oculis-quidem-rer {
            color: #231e1e;
            font-family: Inter;
            font-size: 48px;
            line-height: 64px;
            width: 516px;
            text-align: left;

            font-weight: 500;
          }
          .image {
            border: 1px solid lightGrey;
            width: 516px;
            height: 384px;
          }
        `}</style>
      </div>
    </ContentLayout>
  )
}

export default HeroIndex
