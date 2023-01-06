export function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length(); i++) {
    if(callback(array[i])) {
      result.push(array[i])
    }
  }
  return result;
}

export function defaultCallback (ele) {
  if (ele) {
    return true
  }
}

export function defaultFilter(array) {
  return filter(array, defaultCallback)
}

export const watchlistCallback = (user, ele) => {
  if (user.watchlist.includes(ele.id)) {
    return true
  }
}

export function watchlistFilter(array, user) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if(watchlistCallback(user, array[i])) {
      result.push(array[i])
    }
  }
  return result;
}

export const categoryCallback = (category, ele) => {
  if (category.id === (ele.categoryId)) {
    return true
  }
}

export function categoryFilter(array, category) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if(categoryCallback(category, array[i])) {
      result.push(array[i])
    }
  }
  return result;
}