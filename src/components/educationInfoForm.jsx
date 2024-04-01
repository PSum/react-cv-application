import React from "react";

function EducationInfoForm({ education, handleSchoolChange, handleSubjectChange, handleTimeframeChange }) {
  return (
    <div className="formBlock">
      <h3>Schulische Informationen</h3>
      <form className="formi">
        <div>
          <label htmlFor="School">Schule:</label>
          <input
            type="text"
            value={education.school}
            onChange={handleSchoolChange}
            id="School"
          />
        </div>
        <div>
          <label htmlFor="Studienfach">Studienfach</label>
          <input
            type="text"
            value={education.subject}
            onChange={handleSubjectChange}
            id="Studienfach"
          />
        </div>
        <div>
          <label htmlFor="Zeitraum">Zeitraum</label>
          <input
            type="text"
            value={education.timeframe}
            onChange={handleTimeframeChange}
            id="Zeitraum"
          />
        </div>
      </form>
    </div>
  );
}

export default EducationInfoForm;
