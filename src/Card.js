import React from 'react';

export const Card = (props) => {
  return (<div>
    <div className='card-title'>{props.post.title}</div>
     <div className='card-body'>{props.post.body}</div>
  </div>
)}







