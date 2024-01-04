import React, { useState } from "react";

function FormEmailSub() {
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData}
      ></input>
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default FormEmailSub;
