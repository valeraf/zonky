import React from 'react';

export const ListItem = ({item}) => {  
  const imgUrl = 'https://api.zonky.cz';
  return (
    <div className="list-item">
      <img src={imgUrl + item.photos[0].url} alt={item.name} />
      <h3 className="item-title">{item.name}</h3>
      <p className="item-story">{item.story}</p>
      <p>Loan {item.amount}</p>
    </div>
  );
}