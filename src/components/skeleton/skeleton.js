import React from "react"
import ContentLoader from "react-content-loader"
import './skeleton.scss'

const Skeleton = (props) => (
   <ContentLoader
      className="skeleton"
      speed={2}
      width={200}
      height={330}
      viewBox="0 0 200 330"
      backgroundColor="rgba(255, 255, 255, 0.65)"
      foregroundColor="#e3e3e3"
      {...props}
   >
      <rect x="0" y="0" rx="10" ry="10" width="200" height="280" />
      <rect x="0" y="291" rx="3" ry="3" width="200" height="16" />
      <rect x="0" y="313" rx="3" ry="3" width="200" height="13" />
   </ContentLoader >
)

export default Skeleton

