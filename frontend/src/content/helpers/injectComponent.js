import ReactDOM from 'react-dom'

export default function injectComponent (component, divSelector) {
  console.log('injecting')
  const container = document.querySelector(divSelector)

  if (container === null) return

  const injectedElement = document.createElement('div')
  ReactDOM.render(component, injectedElement)

  return injectedElement
}
