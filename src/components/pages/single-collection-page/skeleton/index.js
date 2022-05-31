import ContentLoader from "react-content-loader";
import './skeleton-compilation.scss'

const Skeleton = (props) => {
   return (
      <div className="container">
         <ContentLoader
            className="skeleton-compilation"
            speed={2}
            width={1280}
            height={600}
            viewBox="0 0 1280 600"
            backgroundColor="rgba(255, 255, 255, 0.65)"
            foregroundColor="#e3e3e3"
            {...props}
         >
            <rect className="skeleton-compilation__circle" x="0" y="204" rx="50" ry="50" width="40" height="40" />
            <rect x="56" className="skeleton-compilation__img" y="204" rx="0" ry="0" width="175" height="262" />
            <rect x="254" className="skeleton-compilation__name" y="204" rx="0" ry="0" width="82" height="20" />
            <rect x="256" className="skeleton-compilation__opi" y="236" rx="5" ry="5" width="90" height="51" />
            <rect x="354" className="skeleton-compilation__ibm" y="236" rx="5" ry="5" width="90" height="51" />
            <rect x="256" className="skeleton-compilation__info-item" y="302" rx="0" ry="0" width="375" height="17" />
            <rect x="56" className="skeleton-compilation__about" y="484" rx="0" ry="0" width="90vw" height="78" />
            <rect x="256" className="skeleton-compilation__genres" y="337" rx="0" ry="0" width="313" height="27" />
            <rect x="0" className="skeleton-compilation__breadcrumbs" y="0" rx="0" ry="0" width="516" height="16" />
            <rect x="0" className="skeleton-compilation__title" y="37" rx="0" ry="0" width="470" height="40" />
            <rect x="0" className="skeleton-compilation__subtitle" y="91" rx="0" ry="0" width="90vw" height="50" />
         </ContentLoader>
      </div>
   )
}

export default Skeleton;