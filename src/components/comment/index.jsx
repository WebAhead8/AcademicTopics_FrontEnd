// import React, { useState } from "react";
// import Nav from "../navBar";
// import "./style.css";
// function ShowComments() {
//   const [comments, setComments] = React.useState([]);
//   const [commentsList, setCommentsList] = React.useState([]);
//   return(
//     <main>
//   <div className="App">
//     <Nav />
//     <legend className="blog">مدونة</legend>
//     {
//   if (comments) {
//     const list = comments.map((comment) => {
//       return (
//         <div className="comment">
//           <label>
//             <b>name :</b> {comment.name}
//           </label>

//           <label>
//             <b>comment : </b>
//             {comment.comment}
//           </label>
//         </div>
//       );
//     });
//     setCommentsList(list);}
//   }

//   return <div className="comments">{commentsList}</div>;
//   </div>
//   </main>);
// }
// export default ShowComments;
