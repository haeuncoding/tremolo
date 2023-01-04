import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'

import ListingTile from "./ListingTile";
import './ListingGrid.css'

const demoListing = {
    listerId: 1,
    makeId: 4,
    categoryId: 1,
    image: lolPhoto,
    listingTitle: "Demo Model Stratocaster Placid Lake Blue",
    condition: "Good",
    price: 650.20,
    location: "Chicago, IL, USA",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
}

const demoListing2 = {
    listerId: 1,
    makeId: 4,
    categoryId: 1,
    image: lolPhoto2,
    listingTitle: "LE Model Telecaster Blood Red",
    condition: "Excellent",
    price: 750.00,
    location: "Richmond, CA, USA",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
}



function ListingGrid () {
  // listings = useSelector(state => state.listings)
  const listings = [
    demoListing,
    demoListing2
  ]

  return (
      <ul class="listing-grid">
        {listings?.map((listing) => <ListingTile listing={(listing)} class="ind-tile"/>)}
      </ul>
  )
}

export default ListingGrid;