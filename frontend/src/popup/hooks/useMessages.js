function useMessages () {
  const msgToContent = async msgObject => {
    try {

      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
      })
      const response = await chrome.tabs.sendMessage(tab.id, msgObject)
      // do something with response here, not outside the function
      console.log(response)

      return {
        succes: true,
        response: response
      }
    } catch (error) {
      console.log(error)
      return {
        succes: false,
        response: null
      }
    }
  }

  return { msgToContent }
}

export default useMessages
