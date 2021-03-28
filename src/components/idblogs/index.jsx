import React, { useState } from "react";
import Nav from "../../components/navBar";
import "./style.css";
import { useHistory } from "react-router-dom";

function IdBlog() {
  const [comments, setComments] = React.useState([]);
  const [commentsList, setCommentsList] = React.useState([]);
  function handlCommentChange(event) {
    setComments(event.target.value);
  }
  function handlCommentSubmit() {
    if (comments === "") return;
    setCommentsList((prevstate) => {
      return [...prevstate, comments];
    });
    setComments("");
  }
  return (
    <main>
      <div className="App">
        <Nav />
        <legend className="blog">مدونة</legend>
        <legend className="sharing">مشاركات:</legend>
        <ul className="post">
          {commentsList.map((eachcomment) => {
            return <li> {eachcomment} </li>;
          })}
        </ul>
        <div className="relative">
          <textarea onChange={handlCommentChange} value={comments}></textarea>
          <div className="absolute">
            <img src="/plus.png" onClick={handlCommentSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default IdBlog;
