import React from 'react';


const CommentDetail=props=>{
return(
    <div className="ui comments">
  <div className="comment">
    <a className="avatar" href="/">
      <img alt="avatar" src={props.image}/>
    </a>
    <div className="content">
      <a className="author" href="/">{props.author}</a>
      <div className="metadata">
        <span className="date">{props.date}</span>
      </div>
      <div className="text">
        {props.text}
      </div>
      </div>
  </div>
  </div>
);
}
export default CommentDetail;