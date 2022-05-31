import ContentLoader from "react-content-loader";
import './skeleton.scss'

const Skeleton = (props) => (
   <ContentLoader
      speed={2}
      width='100%'
      height="100%"
      viewBox="0 0 1280 550"
      preserveAspectRatio="none"
      backgroundColor="rgba(255, 255, 255, 0.65)"
      foregroundColor="#e3e3e3"
      className="skeleton-slider"
      {...props}
   >
      <rect x="0" y="0" rx="15" ry="15" width="100%" height="100%" />
   </ContentLoader>
)

export default Skeleton;