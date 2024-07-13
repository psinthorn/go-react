// this show you how to create function component in react

import React, { Fragment, useEffect, useState } from "react"
import './App.css';
import Input from './input';



function  HelloWorld(props) {

  const [isTrue, setIsTrue] = useState(false);
  const [crowd, setCrowd] = useState([]);

  // People useState
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  const toggleButton = () => {
    if(isTrue) {
      setIsTrue(false);
      return
    }
    setIsTrue(true);
  };

  useEffect(() => {
    console.log("useEffect is Fired");
    let people = [
      {
        firstName: "Sinthorn", 
        LastName: "P.",
        dob: "1980-12-11"
      },{
        firstName: "Na Phansa", 
        LastName: "P.",
        dob: "1980-12-11"
      }
    ];

    setCrowd(people)
    
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, dob); 

  }

  return (
    <Fragment>
      <hr/>
      <br/>
      <div className="h1-green" >{props.msg}</div>

      {isTrue && 
        <frameElement>
          <p>isTrue is {isTrue? "true" : "false" }</p>
        </frameElement>
      }

      <a href="#!" className="btn btn-secondary" onClick={toggleButton}>Toggle is { isTrue? "true" : "false" } </a>
      <hr/>
      <h1>People</h1>

      <hr/>

      <ul>
        {
          crowd.map((m) => (
            <li key={m.firstName} >{m.firstName} {m.LastName}</li>
          ))
        }
      </ul>
      
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="first-name">First Name: {firstName} </label>
      <input
        type="text"
        id=""
        name="first-name"
        className="form-control"
        autoComplete="first-name-new"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <Input 
        title="Last Name" 
        type="text" 
        id="last-name" 
        className="form-control" 
        onChange={(event) => setLastName(event.target.value)}
      />

      <Input 
        title="Date Of Birth" 
        type="date" 
        id="date-of-birth" 
        className="form-control" 
        onChange={(event) => setDob(event.target.value)}
      />

      <input title="Submit" type="submit" name="submit" className="btn btn-success" />
    </form>

    <hr/>
    <div>First Name: {firstName} </div>
    <div>Last Name: {lastName}</div>
    <div>DOB: {dob}</div>

   

    </Fragment>
    
  )
}

export default HelloWorld;