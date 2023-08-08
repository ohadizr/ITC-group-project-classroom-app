import { useEffect, useState } from 'react'

function useMessagesContent () {
  const [msgFromPopup, setMsgFromPopup] = useState()

  useEffect(() => {
    const receiveMsg = (request, sender, sendResponse) => {
      setMsgFromPopup({ ...request })
      console.log(request)
      //   if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' })
    }

    chrome.runtime.onMessage.addListener(receiveMsg)

    return () => {
      chrome.runtime.onMessage.removeListener(receiveMsg)
    }
  }, [])

  return { msgFromPopup }
}

export default useMessagesContent
