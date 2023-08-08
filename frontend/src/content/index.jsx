import React from 'react'
import ReactDOM from 'react-dom/client'
import { TopicPageContextProvider } from './contexts/TopicPageContext.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import GeneralStyle from './GeneralStyle.jsx'
import PageLoader from './PageLoader.jsx'
import './index.css'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

const root = ReactDOM.createRoot(appRoot)
root.render(
  <AuthContextProvider>
    <TopicPageContextProvider>
      <GeneralStyle />
      <PageLoader /> 
    </TopicPageContextProvider>
  </AuthContextProvider>
)
