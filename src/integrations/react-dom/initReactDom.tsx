import { ReactNode, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

export const initReactDom = (children: ReactNode, rootElement = document.getElementById('app')!) => {
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <StrictMode>
        {children}
      </StrictMode>,
    )
  }
}