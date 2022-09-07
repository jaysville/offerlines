import Header from "../Header/Header";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../redux/UI-slice";
import SalesModal from "../../UI/Modal/SalesModal";

const Layout = (props) => {
  const showSalesModal = useSelector((state) => state.ui.showSalesModal);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(uiActions.toggleModalVisibility());
  };
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Shop quality and affordable products"
        />
        <title>OfferLines</title>
      </Head>
      <Header onToggleSalesModal={toggleModal} />
      {showSalesModal && <SalesModal onShowModal={toggleModal} />}
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
