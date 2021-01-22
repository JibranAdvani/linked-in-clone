import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news - 9099 readers")}
      {newsArticle("Corona Virus", "Top news - 1,000 readers")}
      {newsArticle("Tesla hits new heighs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 8,000 readers")}
      {newsArticle("Is Redux too good?", "Code - 8,000 readers")}
    </div>
  )
}

export default Widgets;