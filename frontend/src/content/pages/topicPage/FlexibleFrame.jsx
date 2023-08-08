import React from 'react'
// import { useEffect } from 'react'
import FlexibleBody from './Flexible/FlexibleBody.jsx'
import './FlexibleFrame.css'

function FlexibleFrame () {
  

//   const setDivPosition = () => {
//     const outerDiv = document.querySelector(
//       `[data-topic-id="${curTopicData.topic_id}"]`
//     )
//     console.log(outerDiv)
//     const componentDiv = document.querySelector('.Flexible')

//     const outerDivRect = outerDiv.getBoundingClientRect()
//     const topOffset = window.pageYOffset + outerDivRect.top
//     const leftOffset = window.pageXOffset + outerDivRect.left

//     componentDiv.style.position = 'absolute'
//     componentDiv.style.top = `${topOffset + 10}px`
//     componentDiv.style.left = `${leftOffset + 200}px`
//   }

//   useEffect(() => {
//     setDivPosition()
//   }, [])

  return (
    <div className='FlexibleFrame'>
      <FlexibleBody />
    </div>
  )
}

export default FlexibleFrame
