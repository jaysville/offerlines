import classes from "./styles.module.css";

export const ImageThumbnail = ({ src }) => {
  return (
    <picture>
      <img
        className={`img-thumbnail img-fluid ${classes.thumbnail}`}
        src={src}
        alt="product"
      />
    </picture>
  );
};
