import React from 'react'
import { useState, useEffect } from 'react';

export default function AttachHashtag() {
  const [hashtagArray, setHashtagArray] = useState([])
  const [topicArray, setTopicArray] = useState([])
  
  
  function getAllAshtags() {
    try {
      const url= "https://vozm.onrender.com/hashtags"
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHashtagArray(data)
        return 
      }
      )
    } catch (error) {
      console.log(error)
      
    }
  }
    function getAllTopics() {
      try {
        const url= "https://vozm.onrender.com/topics"
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setTopicArray(data)
          return 
        }
        )
      } catch (error) {
        console.log(error)
      
    }

    
  }
  useEffect(() => {
    getAllAshtags()
    getAllTopics()
  }, [])

  

// function addPickedHashTagsToTopicHashTagArrayInApi() {
  
// }


  return (
    <>
    <div className="attachHashtag">
      <h3>Attach Hashtags</h3>
      <form className="attachHashtagForm">
      
      </form>
    </div>
  </>
  )
}
