import React from 'react'
import { useEffect } from 'react'
import './TopicTags.css'
import useTags from '../../hooks/useTags'

function TopicTags ({ tags }) {
  const { curTopicData } = useTags()

  const setDivPosition = () => {
    console.log('setting position!')
    console.log(curTopicData.topic_id_num)
    const outerDiv = document.querySelector(
      `[data-topic-id="${curTopicData.topic_id_num}"]`
    )
    console.log(outerDiv)
    if (!outerDiv) {
      console.log('💔 outer div not found')
      return
    }

    const componentDiv = document.querySelector('.TopicTags')

    const outerDivRect = outerDiv.getBoundingClientRect()


    const topOffset = window.pageYOffset + outerDivRect.top
    const leftOffset = window.pageXOffset + outerDivRect.left

    componentDiv.style.position = 'absolute'
    componentDiv.style.top = `${topOffset + 10}px`
    componentDiv.style.left = `${leftOffset + 200}px`
  }

  useEffect(() => {
    setTimeout(() => {
      setDivPosition()
    }, 500)
  }, [])

  return (
    <div className='TopicTags'>
    <div className='tagsListContainer'>
      {tags.map(tag => (
        <button className='hashtag'>{tag + ' '}</button>
      ))}
      </div>
    </div>
  )
}

export default TopicTags
