import Modal from "./Modal";
import styled from "styled-components";

const SalesModal = (props) => {
  return (
    <Modal>
      <h3>Sales coming soon</h3>
      <Button onClick={props.onShowModal}>Close</Button>
    </Modal>
  );
};

export default SalesModal;

const Button = styled.button`
  color: aliceblue;
  background-color: black;
  padding: 5px;
  height: 40px;
  width: 70px;
`;
