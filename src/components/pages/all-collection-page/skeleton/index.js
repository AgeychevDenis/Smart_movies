import React from "react";
import ContentLoader from "react-content-loader";
import './skeleton.scss'

const Skeleton = (props) => (
   <ContentLoader
      speed={2}
      width={416}
      preserveAspectRatio="none"
      viewBox="0 0 416 265"
      backgroundColor="rgba(255, 255, 255, 0.65)"
      foregroundColor="#e3e3e3"
      {...props}
      className='skeleton-collection'
   >
      <rect x="0" y="0" rx="10" ry="10" width="416" height="265" />
   </ContentLoader>
)

export default Skeleton;