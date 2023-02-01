import { useSelector } from "react-redux";
import { getUser, fetchUser } from "../../store/users";
import { useState } from "react";
const SessionUserCheck = () => {

  const SessionUser = useSelector(state => state.session.user);
  const BlankUser = {
    email: "",
    username: "", 
    id: "",
    cart: [],
    watchlist: []
  }
  
  let user

  if (SessionUser) {
    user = SessionUser;
  } else {
    user = BlankUser
  }

  return (
    user
  )

}
export default SessionUserCheck