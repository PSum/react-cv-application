import React, { useState } from "react";
import PersonalInfoForm from "./components/personalInfoForm";
import EducationInfoForm from "./components/educationInfoForm";
import "./App.css";

function App() {
  const [person, setPerson] = useState({ name: "", lastName: "", birth: "" });
  const [education, setEducation] = useState({
    school: "",
    subject: "",
    timeframe: "",
  });
  const [isVisible, setVisibility] = useState(false);

  const handleNameChange = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  const handleBirthChange = (e) => {
    setPerson({ ...person, birth: e.target.value });
  };

  const handleSchoolChange = (e) => {
    setEducation({ ...education, school: e.target.value });
  };

  const handleSubjectChange = (e) => {
    setEducation({ ...education, subject: e.target.value });
  };

  const handleTimeframeChange = (e) => {
    setEducation({ ...education, timeframe: e.target.value });
  };

  const handleVisibilityChange = () => {
    setVisibility(!isVisible);
  };

  let fullname = person.name + " " + person.lastName;

  return (
    <>
      <div className="content">
        <div className="left">
          <button onClick={handleVisibilityChange}>
            {isVisible ? "hide information" : "edit information"}
          </button>
          {isVisible && (
            <PersonalInfoForm
              person={person}
              handleNameChange={handleNameChange}
              handleLastNameChange={handleLastNameChange}
              handleBirthChange={handleBirthChange}
            />
          )}
          {isVisible && (
            <EducationInfoForm
              education={education}
              handleSchoolChange={handleSchoolChange}
              handleSubjectChange={handleSubjectChange}
              handleTimeframeChange={handleTimeframeChange}
            />
          )}
        </div>
        <div className="right">
          <h2>Persönliches</h2>
          <p>Name: {fullname}</p>
          <p>Geburtsdatum: {person.birth}</p>
          <h2>Schulische Ausbildung</h2>
          <p>Schule: {education.school}</p>
          <p>Studienfach: {education.subject}</p>
          <p>Zeitraum: {education.timeframe}</p>
        </div>
      </div>
    </>
  );
}

export default App;
