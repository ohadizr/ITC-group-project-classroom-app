import React from 'react'

export default function EditQandA() {
  const questionsOfUserArray = [
    {
      title: "What is the difference between?",
      id: 0
    },
    {
      title: "What is the difference between 2?",
      id: 1

    }
  ]

  const questionsArray = [
  ]
  return (
    <>
    <div>
      <h3>Delete Questions</h3>
      <ul>
        {questionsOfUserArray.map((question) => {
          return (
            <li key={question.id}>
              <p>{question.title}</p>
              <button
                onClick={() => {
                  questionsArray.push(question)
                  questionsOfUserArray.splice(question.id, 1)
                }}
              
              >Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
    </>
  )
}
