import history from './history'

export function changeRoutePage (url) {
  history.push(url)
}

export function goBackRoute () {
  history.goBack()
}

export function getCurrentLocation () {
  return history.location.pathname
}
