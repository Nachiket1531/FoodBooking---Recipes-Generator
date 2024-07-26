import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import "../footer/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="contact-us">
        <div className="footer_content">
          <div className="footer_left">
            <h2>Food.com</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              illo facilis nesciunt ad autem ea quibusdam totam. Fugit,
              voluptatem fugiat?
            </p>
            <div className="footer_social">
              <Link to=" ">
                {" "}
                <FaGithub />
              </Link>
              <Link to=" ">
                <FaLinkedinIn />
              </Link>
              <Link to=" ">
                <ImProfile />
              </Link>
            </div>
          </div>
          <div className="footer_center">
            <h2>company</h2>
            <ul>
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>About us</li>
              </Link>
              <Link>
                <li>Delivery</li>
              </Link>
              <Link>
                {" "}
                <li>Privacy policy</li>
              </Link>
            </ul>
          </div>
          <div className="footer_right">
            <h2>Get in touch</h2>
            <ul>
              <li>+91 9564875124</li>
              <li>nachiketborse1@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer_copy-right">
          Copyright 2024 © || Nachiket - All Right Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
