import React from 'react'
import { useEffect, createContext, useState } from 'react'
import getTopicIdUrlFromUrl from '../helpers/getTopicIdUrlFromUrl'

const TopicPageContext = createContext()
const TempTagObject = {
  _id: 1,
  course_google_no: 'NTM3MzQxMzg4MDMz',
  hash_Tag_id: '1',
  hash_tag_name: 'Introduction to testing',
  hash_tag_content: {
    youtube: [
      'Web Dev Simplified - https://www.youtube.com/watch?v=FgnxcUQ5vho&ab_channel=WebDevSimplified'
    ],
    MDN: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introduction',
    Jest_docs: 'https://jestjs.io/docs/getting-started'
  }
}

function TopicPageContextProvider ({ children }) {
  const [tagsByTopic, setTagsByTopic] = useState()
  const [curTopicData, setCurTopicData] = useState()
  const [lessonsByTopic, setLessonsByTopic] = useState([])
  const [topicIdUrl, setTopicIdUrl] = useState(getTopicIdUrlFromUrl())
  const [hashtags, setHashtags] = useState([])
  const [selectedTag, setSelectedTag] = useState(TempTagObject)

  useEffect(() => {
    console.log('EXTENSION: TopicPageContext loaded')
  }, [])

  useEffect(() => {
    console.log('tagsByTopic current value =>', tagsByTopic)
  }, [tagsByTopic])

  useEffect(() => {
    console.log('topicIdUrl current value =>', topicIdUrl)
  }, [topicIdUrl])
  
  useEffect(() => {
    console.log('hashtags loaded =>', hashtags)
  }, [hashtags])

  return (
    <TopicPageContext.Provider
      value={{
        topicIdUrl,
        setTopicIdUrl,
        tagsByTopic,
        setTagsByTopic,
        lessonsByTopic,
        setLessonsByTopic,
        curTopicData,
        setCurTopicData,
        selectedTag,
        setSelectedTag,
        hashtags,
        setHashtags,
      }}
    >
      {children}
    </TopicPageContext.Provider>
  )
}

export { TopicPageContext, TopicPageContextProvider }
