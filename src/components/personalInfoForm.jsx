import React from "react";

function PersonalInfoForm({ person, handleNameChange, handleLastNameChange, handleBirthChange }) {
  return (
    <div className="formBlock">
      <h3>Persönliche Informationen</h3>
      <form className="formi">
        <div>
          <label htmlFor="Vorname">Vorname</label>
          <input
            type="text"
            value={person.name}
            onChange={handleNameChange}
            id="Vorname"
          />
        </div>
        <div>
          <label htmlFor="Nachname">Nachname</label>
          <input
            type="text"
            value={person.lastName}
            onChange={handleLastNameChange}
            id="Nachname"
          />
        </div>
        <div>
          <label htmlFor="Birth">Birthday</label>
          <input
            type="text"
            value={person.birth}
            onChange={handleBirthChange}
            id="Birth"
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
