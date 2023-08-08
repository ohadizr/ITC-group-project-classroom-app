import React from 'react'
import { useState, useEffect } from 'react'
import useTags from '../../hooks/useTags.js'
import TopicTags from './TopicTags.jsx'
import LessonTags from './LessonTags.jsx'
import FlexibleFrame from './FlexibleFrame.jsx'
import './TopicPage.css'

function TopicPage () {
  console.log('Extension: TopicPage ✔')
  const [isDataReady, setIsDataReady] = useState(false)
  const {
    topicIdUrl,
    getTopicData,
    tagsByTopic,
    getLessonsByTopic,
    lessonsByTopic
  } = useTags()

  const loadData = async () => {
    setIsDataReady(false)
    await getTopicData(topicIdUrl) //! gets the tags from API and loads to the context
    await getLessonsByTopic(topicIdUrl)
    setIsDataReady(true)
  }

  useEffect(() => {
    loadData()
  }, [topicIdUrl])

  return (
    <>
      <div className='TopicPage'>
        <div className='topicHashtagListContainer'>
          {isDataReady ? (
            tagsByTopic?.length > 0 && tagsByTopic != null ? (
              <TopicTags tags={tagsByTopic} />
            ) : (
              <span>No tags!!!</span>
            )
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className='lessons'>
          {lessonsByTopic?.length > 0 &&
            lessonsByTopic?.map(lesson => (
              <LessonTags key={lesson.lesson_id} lesson={lesson} />
            ))}
        </div>
        <div className='flexible'>
          <FlexibleFrame />
        </div>
      </div>
    </>
  )
}

export default TopicPage
