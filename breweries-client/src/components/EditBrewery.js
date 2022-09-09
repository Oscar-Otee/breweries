import React, { useState } from "react";

function EditBrewery({ id, phone, onUpdateBrewery }) {
  const [breweryPhone, setBreweryPhone] = useState(phone);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/breweries/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: breweryPhone,
      }),
    })
      .then((r) => r.json())
      .then((updatedBrewery) => onUpdateBrewery(updatedBrewery));
  }

  return (
    <form className="edit-brewery" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="phone"
        autoComplete="off"
        value={breweryPhone}
        onChange={(e) => setBreweryPhone(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditBrewery;
