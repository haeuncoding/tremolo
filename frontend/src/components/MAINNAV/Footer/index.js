import './Footer.css'
import LinkedInIcon from "../../../assets/LinkedIn_Logo_White.png"
import GithubIcon from "../../../assets/Github_Logo_White.png"

const Footer = () => {

  return(
    <>
      <div id="footer-space">
        
      </div>
      <div id="footer-div">
        <button id="github-button">
          <img src={GithubIcon} id="github-icon" />
        </button>
        <button id="linkedin-button">
          <img src={LinkedInIcon} id="linkedin-icon" />
        </button>
      </div>
    </>
  )

}

export default Footer;