import React from 'react';
import './Card.css';

const Card = props =>{
  if (props.status=="Registering") {
    return(
      <div className="card">
      <div className="title">
        <img src={props.icon}/>
        <p>{props.title}</p>
      </div>
      <div className="info">
      <div className="presenter">
        <img src={props.avatar}/>
        <p>{props.name}</p>
      </div>
      <div>
      <p>Room: {props.room}</p>
      <p>Status: {props.status}</p>
      </div>
      <div>
      <button href={props.registerlink} type="button" className="button">Register</button>
      </div>
      </div>
      </div>
  )
  } else {
    return(
      <div className="card">
      <div className="title">
        <img src={props.icon}/>
        <p>{props.title}</p>
      </div>
      <div className="info">
      <div className="presenter">
        <img src={props.avatar}/>
        <p>{props.name}</p>
      </div>
      <div>
      <p>Room: {props.room}</p>
      <p>Status: {props.status}</p>
      </div>
      </div>
      </div>
  )
  }
  }

export default Card
