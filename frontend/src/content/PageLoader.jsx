import React from 'react'
import { useEffect, useState } from 'react'
import useTags from './hooks/useTags.js'
import useMessagesContent from './hooks/useMessagesContent.js'
import TopicPage from './pages/topicPage/TopicPage.jsx'
import StreamPage from './pages/streamPage/StreamPage.jsx'
import { TOPIC_URL, STREAM_URL } from './config/pagesUrl.js'
import getTopicIdUrlFromUrl from './helpers/getTopicIdUrlFromUrl.js'

function PageLoader () {
  const [showTopicPage, setShowTopicPage] = useState(false)
  const [showStreamPage, setShowStreamPage] = useState(false)
  const { setTopicIdUrl } = useTags()
  const { msgFromPopup } = useMessagesContent()

  function checkUrl () {
    setShowTopicPage(window.location.href.includes(TOPIC_URL))
    setShowStreamPage(window.location.href.includes(STREAM_URL))
  }

  useEffect(() => {
    function addClickEvents () {
      const aElements = document.querySelectorAll('a')
      aElements.forEach(aElement => {
        aElement.addEventListener('click', handleUrlChange)
      })
    }

    function handleUrlChange () {
      setTimeout(() => {
        addClickEvents() //! ADDS EVENT LISTNERES FOR ALL LINKS TO handleUrlChange()
        checkUrl() //! RENDERS COMPONENT ONLY IF CURRENT PAGE IS A TOPIC PAGE
        setTopicIdUrl(getTopicIdUrlFromUrl())
      }, 1500)
    }

    setTimeout(() => {
      addClickEvents()
      checkUrl()
    }, 2500)

    return () => {
      aElements.forEach(aElement => {
        aElement.removeEventListener('click', handleUrlChange)
      })
    }
  }, [])

  useEffect(() => {
    if (msgFromPopup) {
      console.log('Message recieved from Popup =>', msgFromPopup)
    }
  }, [msgFromPopup])

  return (
    <>
      {showTopicPage && <TopicPage />}
      {showStreamPage && <StreamPage />}
    </>
  )
}

export default PageLoader
