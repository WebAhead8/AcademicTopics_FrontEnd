import React from "react";
import Nav from "../../components/navBar";
import "./style.css";

function Blog() {
  return (
    <main>
      <div className="App">
        <Nav />
        <legend className="blog">مدونة</legend>
        <legend className="sharing">مشاركه جديدة:</legend>
        <div className="relative">
          <textarea></textarea>
          <div className="absolute">
            <img src="/plus.png" />
          </div>
        </div>
        <legend className="sharing">مشاركات:</legend>
      </div>
    </main>
  );
}
export default Blog;
