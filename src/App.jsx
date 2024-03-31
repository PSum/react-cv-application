import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [person, setPerson] = useState({ name: "", lastName: "", birth: ""});
  const [education, setEducation] = useState({ school: "", subject: "", timeframe: ""});

  // Event handler to update person's name
  const handleNameChange = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  // Event handler to update person's last name
  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  const handleBirthChange = (e) => {
    setPerson({ ...person, birth: e.target.value });
  };
  let fullname = person.name + " " + person.lastName;

  const handleSchoolChange = (e) => {
    setEducation({ ...education, school: e.target.value });
  };

  // Event handler to update person's last name
  const handleSubjectChange = (e) => {
    setEducation({ ...education, subject: e.target.value });
  };

  const handleTimeframeChange = (e) => {
    setEducation({ ...education, timeframe: e.target.value });
  };




  return (
    <>
      <form className="formi">
<div>
        <label for="Vorname">Vorname</label>
        <input type="text" value={person.name} onChange={handleNameChange} id="Vorname" />
</div>
<div>
        <label for="Nachname">Nachname</label>
        <input type="text" value={person.lastName} onChange={handleLastNameChange} id="Nachname" />
</div>
<div>
        <label for="Birth">Birthday</label>
        <input type="text" value={person.birth} onChange={handleBirthChange} id="Birth" />
</div>
      </form>

      <form className="formi">
<div>
        <label for="School">Schule:</label>
        <input type="text" value={education.school} onChange={handleSchoolChange} id="School" />
</div>
<div>
        <label for="Studienfach">Studienfach</label>
        <input type="text" value={education.subject} onChange={handleSubjectChange} id="Studienfach" />
</div>
<div>
        <label for="Zeitraum">Zeitraum</label>
        <input type="text" value={education.timeframe} onChange={handleTimeframeChange} id="Zeitraum" />
</div>
      </form>
      {/* Display full name */}
      <h2>Persönliches</h2>
      <p>Name: {fullname}</p>
      <p>Geburtsdatum: {person.birth}</p>
      <h2>Schulische Ausbildung</h2>
      <p>Schule: {education.school}</p>
      <p>Studienfach: {education.subject}</p>
      <p>Zeitraum: {education.timeframe}</p>
    </>
  );
}

export default App;
