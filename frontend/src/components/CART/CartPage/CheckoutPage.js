import './CheckoutPage.css'
import LinkedInIcon from "../../../assets/LinkedIn_Logo_White.png"
import GithubIcon from "../../../assets/Github_Logo_White.png"
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  // const sessionUser = useSelector(state => state.session.user)
  // const listingImage = lolPhoto

  const quirkySayingBank = [
    "Look at you Kings, Queens, and other Rulers! Spreading the gear love.",
    "We applaud you 👏 Another listing done, more cash to make.",
    "You hear that? 🧏🧏 That's the sound of a listing well made.",
    "Congrats on giving old gear to a happy new owner 😎😎"
  ]

  const quirkySaying = () => {
    return quirkySayingBank[Math.floor(Math.random()*(quirkySayingBank.length - 1))]
  }

  return (
    <>
    <div className="checkout-container">
      <div id="congrats-container">
        <h1>Congrats on Your Purchase!</h1>
      </div>
      <div id="quirky-container">
        <h1>{quirkySaying()}</h1>      
      </div>
      <div className='checkout-link-div'>
        <Link className="checkout-link" to="/">
          Continue to Purchase
        </Link>
        <Link className="checkout-link" to="/new_listing">
            Create a Another Listing
        </Link>
        <Link className="checkout-link" to="/">
            Return Home
        </Link>
      </div>
      <hr />
        <div className='socials-div'>

              <a href="https://github.com/haeuncreative" className='outer-link'>
            <img src={GithubIcon} id="github-icon-checkout" />
              </a>

            <a href="https://www.linkedin.com/in/nathankwon818/" className='outer-link'>
              <img src={LinkedInIcon} id="linkedin-icon-checkout" />
            </a>
        </div>
      <hr id="socials-div-hr" />
    </div>
    </>
  )
}

export default CheckoutPage;