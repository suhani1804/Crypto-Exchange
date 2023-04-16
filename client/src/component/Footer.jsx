import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#" target="_blank">
                <BsGithub size={25}/>
              </a>
              <a href="#" target="_blank">
                <BsLinkedin size={25} color="#0A66C2"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
