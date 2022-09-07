import classes from "./Header.module.css";
import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = (props) => {
  const router = useRouter();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">
              <h3>OfferLines</h3>
            </Link>
          </li>
          <li>
            <span
              className={classes["shop-link"]}
              onClick={() => {
                router.push("/shop");
              }}
            >
              SHOP
            </span>
          </li>
          <li>
            <span
              className={classes.links}
              onClick={() => {
                router.push("https://github.com/jaysville/offerlines");
              }}
            >
              <GitHubIcon className="mb-1" />
            </span>
            <span className={classes.links}>
              <CardGiftcardOutlinedIcon onClick={props.onToggleSalesModal} />
            </span>
            <span
              onClick={() => {
                router.push("/cart");
              }}
              className={classes.links}
            >
              <ShoppingBagOutlinedIcon />
              {totalQuantity > 0 && (
                <div className={classes.badge}>
                  <span>{totalQuantity}</span>
                </div>
              )}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
