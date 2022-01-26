const ContentLayout: React.FC = ({ children }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          margin: 0 172px;
        }
      `}</style>
    </div>
  )
}

export default ContentLayout
