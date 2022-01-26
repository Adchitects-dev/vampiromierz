const Positions = () => {
  return (
    <>
      <p className="products" style={{ marginRight: 48 }}>
        Products
      </p>
      <p className="products" style={{ marginRight: 48 }}>
        Solutions
      </p>
      <p className="products" style={{ marginRight: 48 }}>
        Resources
      </p>
      <p className="products">About</p>

      <style jsx>{`
        .products {
          color: #231e1e;
          font-family: Inter;
          font-size: 16px;
          line-height: 24px;
          text-align: left;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Positions
