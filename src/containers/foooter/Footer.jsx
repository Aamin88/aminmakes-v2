import "./footer.css";
import { useState } from "react";

import { footerContent } from "../../components/footerIcon/FooterIcon";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className="site__footer section__padding">
      <div className="site__footer-social">{footerContent}</div>
      <div>
        <p className="gradient__text-light footer__note">
          Designed & Build by Amin Alhassan {"😎😎"} {year}
        </p>
      </div>
    </div>
  );
}

export default Footer;
