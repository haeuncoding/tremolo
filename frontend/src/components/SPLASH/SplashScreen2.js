import SplashScreenImg2 from '../../assets/Splash2.png'
import { Link } from 'react-router-dom'
import './SplashScreen2.css'

const SplashScreen2 = () => {

  return (
    <div id="splash-container2">
      <div id="splash-text-container2">
        <h3 id="splash-caption2">Pedal to the Metal</h3> 
<<<<<<< HEAD
        <Link id="link-button-container2" to='/listings'>
=======
        <Link id="link-button-container2" to='/categories/3'>
>>>>>>> 1122023main
          <button id="shop-now-button2">
            Check Out our Pedal Selection
          </button>       
       </Link>
      </div>
      <img src={SplashScreenImg2} id="splash-screen2"/>                
    </div>
  )
}

export default SplashScreen2