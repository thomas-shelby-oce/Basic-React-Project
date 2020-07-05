import React from 'react';

const Rainbow=(WrappedContent)=>{
  const colors=['red','pink','orange','blue','green','yellow'];
  const randomColor=colors[Math.floor(Math.random()*5)];
  const className=randomColor+'-text';
  return (props)=>{
    return(
      <div className={className}>
       <WrappedContent {...props} />
      </div>

    )
  };
};

export default Rainbow;
