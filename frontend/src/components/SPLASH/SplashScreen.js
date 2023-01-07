import SplashScreenImg from '../../assets/SplashScreenNoWords.png'
import { Link } from 'react-router-dom'
import './SplashScreen.css'

const SplashScreen = () => {

  return (
    <div id="splash-container">
      <div id="splash-text-container">
        <h1 id="splash-title">New Year, New Gear</h1>
        <br />
        <h3 id="splash-caption">That means savings on items from Chise Blass, Ernie Balls, Bender, and more!</h3> 
        <Link id="link-button-container" to='/listings'>
          <button id="shop-now-button">
            Shop Now
          </button>       
       </Link>
      </div>
      <img src={SplashScreenImg} id="splash-screen"/>                
    </div>
  )
}

export default SplashScreen