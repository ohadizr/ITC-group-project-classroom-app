import { useEffect } from 'react'
import { useContext } from 'react'
import { TopicPageContext } from '../contexts/TopicPageContext.jsx'
import TopicsAPI from '../api/topicsAPI.js'

function useTags () {
  const {
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
  } = useContext(TopicPageContext)

  const getTopicData = async topicIdUrl => {
    const result = await TopicsAPI.getTopicData(topicIdUrl)
    console.log({ result })
    setCurTopicData(result)
    setTagsByTopic(result.hash_tags_id_arr)
    return result
  }

  const getLessonsByTopic = async topicID => {
    const result = await TopicsAPI.getLessonsByTopic(topicID)
    console.log({ result })
    setLessonsByTopic(result)
    return result
  }

  useEffect(() => {
    const loadHashtags = async () => {
      setHashtags(await TopicsAPI.gelAllTags())
    }

    loadHashtags()
  },[])



  return {
    topicIdUrl,
    setTopicIdUrl,
    getTopicData,
    tagsByTopic,
    getLessonsByTopic,
    lessonsByTopic,
    curTopicData,
    setCurTopicData,
    selectedTag,
    setSelectedTag,
    hashtags,
    setHashtags,
  }
}

export default useTags
