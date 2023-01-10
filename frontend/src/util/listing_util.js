import * as categoryActions from "../../src/store/categories"
import * as shopActions from "../../src/store/shops"
import * as makeActions from "../../src/store/makes"
import * as modelActions from "../../src/store/models"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export const AllCategories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(categoryActions.getCategories)

  useEffect(() => {
    dispatch(categoryActions.fetchCategories())
  }, [dispatch])

  return (
    categories
  )
}

export const AllShops = () => {
  const dispatch = useDispatch()
  const shops = useSelector(shopActions.getShops)

  useEffect(() => {
    dispatch(shopActions.fetchShops())
  }, [dispatch])

  return (
    shops
  )
}

export const FindSpecificShop = (listerId) => {
  const dispatch = useDispatch()
  const shop = useSelector(shopActions.getShopByOwnerId(listerId))
  console.log(shop)
  useEffect(() => {
    dispatch(shopActions(shopActions.fetchShop(shop.id)))
  }, [dispatch, shop.id])

  return (shop)
}

export const AllMakes = () => {
  const dispatch = useDispatch()
  const makes = useSelector(makeActions.getMakes)

  useEffect(() => {
    dispatch(makeActions.fetchMakes())
  }, [dispatch])

  return (
    makes
  )
}


export const AllModels = () => {
  const dispatch = useDispatch()
  const models = useSelector(modelActions.getModels)

  useEffect(() => {
    dispatch(modelActions.fetchModels())
  }, [dispatch])

  console.log(models)
  return (
    models
  )
}