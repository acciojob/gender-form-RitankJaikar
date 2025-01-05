import React, { useState } from "react";

const GenderForm = () => {
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setSize("");
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Gender Selection */}
      <h2>Select your gender:</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleGenderChange}
          checked={gender === "Male"}
        />
        Male
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleGenderChange}
          checked={gender === "Female"}
        />
        Female
      </label>

      {/* Conditional Rendering for Size Selection */}
      {gender === "Male" && (
        <div>
          <h2>Select your shirt size:</h2>
          <select value={size} onChange={handleSizeChange}>
            <option value="" disabled>
              Select size
            </option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      )}

      {gender === "Female" && (
        <div>
          <h2>Select your dress size:</h2>
          <select value={size} onChange={handleSizeChange}>
            <option value="" disabled>
              Select size
            </option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        </div>
      )}

      {/* Display Selected Values */}
      {size && (
        <div style={{ marginTop: "20px" }}>
          <strong>
            You selected: {gender} - {size}
          </strong>
        </div>
      )}
    </div>
  );
};

export default GenderForm;
