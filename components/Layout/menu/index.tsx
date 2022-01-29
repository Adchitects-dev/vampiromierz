import ContactUsButton from "./ContactUsButton"
import Logo from "./Logo"
import Positions from "./Positions"

type Pages = {
  pages: Array<{
    params: { url: string; id: string; sections: Array<{ [x: string]: any }> }
  }>
}

const MenuIndex = ({ pages }: Pages) => {
  const homeProp = pages.find(({ params: { url } }) => url === "/").params

  return (
    <div className="path-bottom">
      <div className="nav-container">
        <div className="positions">
          <Logo id={homeProp.id} url={homeProp.url} />
          <Positions {...{ pages }} />
        </div>

        <ContactUsButton />
      </div>
      {/* look after lack of border in css */}
      {/* <span className="path" /> */}

      <style jsx>{`
        .path {
          border: 1px solid #f1f0f0;
        }
        .path-bottom {
          border-bottom: 1px solid #f1f0f0;
          display: flex;
          justify-content: center;
        }
        .positions {
          display: flex;
          align-items: center;
        }
        .nav-container {
          display: flex;
          height: 72,
          margin: 0 64px;
          padding-bottom: 24px;
          justify-content: space-between;
          align-items: center;
          width: 1400px;
        }
    
   
      `}</style>
    </div>
  )
}

export default MenuIndex
