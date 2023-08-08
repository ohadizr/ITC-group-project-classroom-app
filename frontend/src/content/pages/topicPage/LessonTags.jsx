import React from "react";
import { useEffect } from "react";
import useTags from "../../hooks/useTags.js";
import "./LessonTags.css";

const TempTagObject1 = {
  _id: 1,
  course_google_no: "NTM3MzQxMzg4MDMz",
  hash_Tag_id: "1",
  hash_tag_name: "Introduction to testing",
  hash_tag_content: {
    youtube: [
      "Web Dev Simplified - https://www.youtube.com/watch?v=FgnxcUQ5vho&ab_channel=WebDevSimplified",
    ],
    MDN: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introduction",
    Jest_docs: "https://jestjs.io/docs/getting-started",
  },
};

const TempTagObject2 = {
  _id: 2,
  course_google_no: "NTM3MzQxMzg4MDMz",
  hash_Tag_id: "2",
  hash_tag_name: "Jest",
  hash_tag_content: {
    youtube: [
      "Web Dev Simplified - https://www.youtube.com/watch?v=FgnxcUQ5vho&ab_channel=WebDevSimplified",
    ],
    MDN: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introduction",
    Jest_docs: "https://jestjs.io/docs/getting-started",
  },
};

function LessonTags({ lesson }) {
  const { setSelectedTag } = useTags();

  const setDivPosition = () => {
    const outerDiv = document.querySelector(
      `[data-stream-item-id="${lesson.id}"]`
    );
    console.log(outerDiv);
    const componentDiv = document.querySelector(`#lesson${lesson.id}`);

    const outerDivRect = outerDiv.getBoundingClientRect();
    const topOffset = window.pageYOffset + outerDivRect.top;
    const leftOffset = window.pageXOffset + outerDivRect.left;

    componentDiv.style.position = "absolute";
    componentDiv.style.top = `${topOffset + 70}px`;
    componentDiv.style.left = `${leftOffset + 400}px`;
  };

  useEffect(() => {
    setTimeout(() => {
      setDivPosition();
    }, 500);
  }, []);

  const handleClick = (index) => {
    if (index === 0) {
      setSelectedTag(TempTagObject1);
    }

    if (index === 1) {
      setSelectedTag(TempTagObject2);
    }
  };

  return (
    <div id={`lesson${lesson?.id}`} className="LessonTags">
      {lesson?.tags.map((tag, index) => (
        <button
          key={tag}
          onClick={() => handleClick(index)}
          className="hashtag"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default LessonTags;
