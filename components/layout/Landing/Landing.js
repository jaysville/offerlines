import classes from "./Landing.module.css";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Landing = () => {
  return (
    <section className={classes.landing}>
      <div className="row">
        <div className="col-md-6">
          <picture>
            <img
              src="https://img.freepik.com/free-photo/excited-african-woman-holding-shopping-bags-mobile-phone_171337-14029.jpg?w=900&t=st=1661962503~exp=1661963103~hmac=de9b797b593fa0b330cb4d610feb9c94fb116d01b492ed315e8aa10a8de0e268"
              className="img-fluid"
              alt="landing-banner"
            />
          </picture>
        </div>
        <div
          className={`col-md-6 d-flex flex-column justify-content-around align-items-center p-3 ${classes.shop}`}
        >
          <h2>
            Shopping with better offers at{" "}
            <span className={classes.offerlines}>OfferLines</span>
          </h2>
          <h3>Each purchase will be made with pleasure!</h3>
          <Link href="/shop">
            <button className={classes.button}>
              SHOP NOW {""}
              <span>
                <ShoppingCartOutlinedIcon />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
