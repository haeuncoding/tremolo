import ListingComponent from "../ListingComponent";
import * as listingActions from "../../../store/listings"
import lolPhoto from '../../../assets/temp_assets/dumb_photo_5.JPG'
import lolPhoto2 from '../../../assets/temp_assets/dumb_photo_4.JPG'
import { useSelector, useDispatch } from "react-redux";
import ListingTile from "../ListingTile/ListingTile";
import './ListingGrid.css'
import { useEffect } from "react";


{const listing1 = ({
    lister_id: 1,
    make_id: 4,
    model_id: 1,
    category_id: 1,
    listingTitle: "Demo Model Stratocaster Placid Lake Blue",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  const listing2 = ({
    lister_id: 2,
    make_id: 2,
    model_id: 3,
    category_id: 1,
    listingTitle: "Demo Model Partscaster Blood Red",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  const listing3 = ({
    lister_id: 3,
    make_id: 4,
    model_id: 2,
    category_id: 4,
    listingTitle: "Demo Model Partscaster Poison Green",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  const listing4 = ({
    lister_id: 4,
    make_id: 3,
    model_id: 4,
    category_id: 1,
    listingTitle: "Demo Model Partscaster Orange Orange",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  const listing5 = ({
    lister_id: 5,
    make_id: 2,
    model_id: 1,
    category_id: 1,
    listingTitle: "Demo Model Partscaster Orange Orange",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  const listing6 = ({
    lister_id: 5,
    make_id: 2,
    model_id: 1,
    category_id: 1,
    listingTitle: "Demo Model Partscaster Orange Orange",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  const listing7 = ({
    lister_id: 5,
    make_id: 2,
    model_id: 1,
    category_id: 1,
    listingTitle: "Demo Model Partscaster Orange Orange",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

    const listing8 = ({
    lister_id: 5,
    make_id: 2,
    model_id: 1,
    category_id: 1,
    listingTitle: "Demo Model Partscaster Orange Orange",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })}

function ListingGrid () {
  // const listings = [
  const listingsArr = useSelector(listingActions.getListings)
  const listings = listingsArr[0]
  // console.log("listings array listing grid")
  // console.log(listings)
  // const listings = [
  //   listing1, listing2, listing3, listing4, listing5, listing6, listing7, listing8
  // ]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listingActions.fetchListings())
  }, [dispatch])

  return (
    <ul className="listing-grid">
      {listings?.map((listing) => <ListingTile listing={listing} class="ind-tile"/>)}
    </ul>
    // <h1>this is the listing grid</h1>
  )
}

export default ListingGrid;