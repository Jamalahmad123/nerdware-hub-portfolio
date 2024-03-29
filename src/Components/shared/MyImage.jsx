import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ src, alt, style }) => (
  <LazyLoadImage alt={alt} effect="blur" src={src} className={style} />
);

export default MyImage;
