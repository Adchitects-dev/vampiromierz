import ContactUsButton from "./ContactUsButton"
import Logo from "./Logo"
import Positions from "./Positions"

const MenuIndex = () => {
  return (
    <div className="path-bottom">
      <div
        style={{
          display: "flex",
          height: 72,
          margin: "0 64px 0 64px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <Positions />
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
        }
        .products {
          color: #231e1e;
          font-family: Inter;
          font-size: 16px;
          line-height: 24px;
          text-align: left;
        }
        .rectangle {
          background-color: #dac2f2;
          border-radius: 24px;
          width: 192px;
          height: 48px;
        }
        .contact-us {
          color: #231e1e;
          font-family: Inter;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default MenuIndex
