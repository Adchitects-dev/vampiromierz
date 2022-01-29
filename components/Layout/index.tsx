import MenuIndex from "./menu"

const Layout = ({ children, pages }) => {
  return (
    <div className="main-container">
      <MenuIndex {...{ pages }} />

      <main>{children}</main>
      <style jsx>{`
        .main-container {
          padding: 32px 0 128px 0;
        }
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Layout
