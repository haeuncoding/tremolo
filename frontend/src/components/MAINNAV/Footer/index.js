import './Footer.css'
import { Link } from 'react-router-dom'
import LinkedInIcon from "../../../assets/LinkedIn_Logo_White.png"
import GithubIcon from "../../../assets/Github_Logo_White.png"

const Footer = () => {

  return(
    <>
      <div id="footer-space">
        
      </div>
      <div id="footer-div">
          <button id="github-button">
              <a href="https://github.com/haeuncreative" className='outer-link'>
            <img src={GithubIcon} id="github-icon" />
              </a>
          </button>
          <button id="linkedin-button">
            <a href="https://www.linkedin.com/in/nathankwon818/" className='outer-link'>
              <img src={LinkedInIcon} id="linkedin-icon" />
            </a>
          </button>
      </div>
    </>
  )

}

export default Footer;