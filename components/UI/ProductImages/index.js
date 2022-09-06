import classes from "./styles.module.css";

export const ImageThumbnail = ({ src }) => {
  return (
    <picture className={classes["img-container"]}>
      <img className="img-thumbnail img-fluid" src={src} alt="product" />
    </picture>
  );
};
