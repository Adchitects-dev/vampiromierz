type Layout = {
  children:  React.ReactNode
  margin?: number
}

const ContentLayout = ({ children, margin = 0 }: Layout) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          margin: ${margin}px 0 0 0;
          width: 1400px;
        }
      `}</style>
    </div>
  )
}

export default ContentLayout
