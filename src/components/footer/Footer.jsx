import React from "react";
// import evalogo from "../../assets/evafootlogo.png"
import classes from "./footer.module.css";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import im1 from "./evangadi-logo-footer.png";
function Footer() {
  return (
    <footer>
      <section className={classes.footer_outer_container}>
        <div className={classes.footer_inner_container}>
          <div className={classes.first_section}>
            <ul>
              <div className={classes.logo_wrapper}>
                <li>
                  <a href="/">
                    {/* <img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png" alt="" /> */}
                    <img src={im1} alt="logo" />
                  </a>
                </li>
              </div>

              <div className={classes.footer_icons}>
                <li>
                  <a
                    href="https://www.facebook.com/evangaditech"
                    target="_blank"
                  >
                    <LuFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/evangaditech/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@EvangadiTech"
                    target="_blank"
                  >
                    <AiOutlineYoutube />
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div className={classes.second_section}>
            <ul>
              <h3>Usefull Link</h3>

              <div className={classes.lists}>
                <li>How it works</li>
                <li>Terms of Service</li>
                <li>Privacy policy</li>
              </div>
            </ul>
          </div>
          <div className={classes.third_section}>
            <ul>
              <h3>contact info</h3>
              <div className={classes.lists}>
                <li>Evangadi Networks</li>
                <li> support@evangadi.com</li>
                <li>+1-202-386-2702</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
