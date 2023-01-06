import { useState } from "react";
import { useDispatch } from "react-redux";

export function useInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}

export function useSubmit ({initialState}) {
  const newState = {...initialState}
  const [errors, setErrors] = useState({})

  e.preventDefault
}

export function useSubmit ({createAction, onSuccess, wrap}) {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if ( wrap?.bool === false ) {
      return (setErrors(wrap.errors))
    } else {
      setErrors([])
      return dispatch(createAction())
      .catch(async response => {
        let data;
        try { data = await response.clone().json() }
        catch { data = await response.text(); }
        if (data?.errors) { setErrors(data.errors) }
        else if (data) {setErrors([data])}
        else {setErrors([response.statusText])}
      })
      .then(onSuccess)
    }
  }
  return [errors, handleSubmit]
}