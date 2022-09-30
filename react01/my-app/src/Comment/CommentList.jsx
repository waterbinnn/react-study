import React from "react";
import Comment from "./Comment";


const comments = [
  {
    name: '수빈',
    comment: '수빈수빈'
  },
  {
    name: '류진',
    comment: '류진류진입니다'
  },
  {
    name: '빙빙',
    comment: '빙빙돌아가는'
  }
]

export default function CommentList(props) {

  return (
    <div>
    {comments.map((comment)=> {
      return (
      <Comment name={comment.name} comment={comment.comment} />
      )
    } )}
    </div>
  );
}
