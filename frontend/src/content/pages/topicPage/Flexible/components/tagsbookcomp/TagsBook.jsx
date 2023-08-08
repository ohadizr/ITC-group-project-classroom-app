import React from "react";
import { Grid } from "../.././UiKit/Grid/Grid";
import { Line, Rows } from "../.././UiKit/Line/Line";
import { useState, useEffect } from "react";
import useTags from "../../../../../hooks/useTags.js";
import "./TagsBook.css";
import TagsBook from "./TagsBook.jsx";
export default function TagsBook() {
  const { selectedTag } = useTags();
  const [hashtags, setHashtags] = useState([]);

  async function gethashtags() {
    try {
      const response = await fetch("https://vozm.onrender.com/hashtags");
      const data = await response.json();
      setHashtags(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    gethashtags();
  }, []);

  return (
    <>
      <Grid>
        <Line>
        </Line>
        <Line>
          {hashtags.map((hashtag) => {
            return (
              <div className="tagBookContainer">
                <h3>{hashtag.hash_tag_name}</h3>
                <p>{hashtag.hash_tag_content}</p>
              </div>
            );
          })}
        </Line>
      </Grid>
    </>
  );
}
