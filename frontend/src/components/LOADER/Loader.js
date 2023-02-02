import TremoloIcon from '../../assets/TremoloIconColor.png'
import "./Loader.css"
const Loader = () => {

  return(

    <div className='LoadingDiv'>
      <img src={TremoloIcon} id="tremolo-icon"/>
      <p className='loadingText'>Loading ...</p>
    </div>
  )

}

export default Loader