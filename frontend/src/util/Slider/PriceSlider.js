import { ReactPropTypes, useState, useRef } from "react"

const PriceSlider = ({min, max, onChange}) => {

  PriceSlider.ReactPropTypes = {
    min: ReactPropTypes.number.isRequired,
    max: ReactPropTypes.number.isRequired,
    onChange: ReactPropTypes.func.isRequired,
  }

  const [minPrice, setMinPrice] = useState(min)
  const [maxPrice, setMaxPrice] = useState(max)

  const minPriceRef = useRef(null)
  const maxPriceRef = useRef(null)
  
  return (
    <>
      <input 
        type="range" 
        min="0" 
        max="99999" 
        name="" 
        className="thumb thumb--zindex-3"
         />
      <input 
        type="range" 
        min="0" 
        max="99999" 
        name="" 
        className="thumb thumb--zindex-4"
         />
        <div className="slider">
            <div className="slider_track" />
            <div className="slider_range" />
        </div>
    </>
  )
}
export default PriceSlider