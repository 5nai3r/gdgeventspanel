import React from 'react';
import './Content.css';
import Card from '../card/Card';

const Content = props =>
    <div className="content">
          {props.cards.map(card =>
              <Card icon={card.icon} title={card.title} avatar={card.avatar} name={card.name} room={card.room} status={card.status}/>
        )}
    </div>


export default Content
