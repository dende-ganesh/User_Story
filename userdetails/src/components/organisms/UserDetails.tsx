import React, { useState } from "react";
import child from "../assets/children.png"
import adult from "../assets/adult.png"
import old from "../assets/old.jpg"
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

export default function UserDetails() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Male");

  function getImageBasedOnAge(value: number) {
    if (value >0 && value <= 20) {
      return <img src={child} alt="child"></img>;
    } else if (value > 20 && value <= 40) {
      return <img src={adult} alt="adult" />;
    } else if (value>40){
      return <img src={old} alt="senior" />;
    }
  }
  const getRemainingDetails = () => {
    if (name) {
      return (
        <div className="age">
          <label>Age: </label>
          <input
            type="number"
            min={1}
            max={100}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          /><br></br>
          {getImageBasedOnAge(age)}<br></br>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select><br></br>
          {gender === "Male" ? (
            <MaleIcon/>
          ) : (
            <FemaleIcon/>
          )}
        </div>
      );
    }
  };

  return (
    <div className="user">
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br></br>
      {getRemainingDetails()}
      </div>
  );
}
