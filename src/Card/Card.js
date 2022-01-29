import React from 'react';

const Card = (props) => {
  return (<div>
    <div className='card-title'>{props.post.title}</div>
     <div className='card-body'>{props.post.body}</div>
  </div>
)}

export default Card;





