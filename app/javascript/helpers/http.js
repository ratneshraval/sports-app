import 'whatwg-fetch'

export const getCsrfToken = function getCsrfToken (value) {
  var metas = document.getElementsByTagName('meta')
  return metas[value] ? metas[value].content : ''
}

const myHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-CSRF-Token': getCsrfToken('csrf-token'),
  'X-CSRF-param': getCsrfToken('csrf-param')
}

export const fetchRequest = (url, method, params, headerParams) => {
  let options = {
    method: method,
    headers: myHeaders,
    credentials: 'same-origin'
  }
  params && (options.body = JSON.stringify(params))

  return fetch(url, options)
}

function handleErrors (response) {
  if (!response.ok) {
    throw response
  }
  return response.json()
}

export const fetchRequestWithErrors = (url, method, body) => {
  return fetchRequest(url, method, body)
    .then(handleErrors)
    .then(data => data)
}
