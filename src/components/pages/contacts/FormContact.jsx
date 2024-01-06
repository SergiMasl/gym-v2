import React, { useState } from "react";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      number: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="footer-form-wrapper">
      <input
        type="displayName"
        placeholder="Name"
        name="name"
        required
        onChange={handleChange}
        value={formData.name}
      ></input>
      <input
        type="email"
        required
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      ></input>
      <input
        type="tel"
        required
        placeholder="Phone Number"
        name="number"
        onChange={handleChange}
        value={formData.number}
      ></input>
      <button type="submit" className="btm-sub">
        Subscribe
      </button>
    </form>
  );
}

export default FormContact;
