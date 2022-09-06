import HighQualityOutlinedIcon from "@mui/icons-material/HighQualityOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import classes from "./Perks.module.css";

const IconStyle = {
  fontSize: "50px",
};
const Data = [
  {
    perk: "High Quality",
    icon: <HighQualityOutlinedIcon style={IconStyle} />,
    text: "Authentic products just for you!",
  },
  {
    perk: "1 Year Warranty!",
    icon: <VerifiedUserOutlinedIcon style={IconStyle} />,
    text: "We've got you covered!",
  },
  {
    perk: "Free Shipping",
    icon: <LocalShippingOutlinedIcon style={IconStyle} />,
    text: "Across the globe!",
  },
  {
    perk: "24/7 Support",
    icon: <SupportAgentOutlinedIcon style={IconStyle} />,
    text: "We're here for you!",
  },
];

const Perks = () => {
  return (
    <ul className={classes.perks}>
      {Data.map(({ perk, icon, text }, i) => {
        return (
          <li key={i}>
            <div className="d-flex">
              <div>{icon}</div>
              <div className="d-flex flex-column ms-3">
                <strong>{perk}</strong>
                <small>{text}</small>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Perks;
