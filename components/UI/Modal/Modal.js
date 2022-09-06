import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      <Backdrop />,
      <ModalOverlay className={props.className}>{props.children}</ModalOverlay>,
    </>
  );
};

export default Modal;
