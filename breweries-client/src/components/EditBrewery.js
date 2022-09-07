import React, { useState } from "react";

function EditBrewery({ id, body, onUpdateBrewery }) {
  const [breweryBody, setBreweryBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/breweries/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: breweryBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedBrewery) => onUpdateBrewery(updatedBrewery));
  }

  return (
    <form className="edit-brewery" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={breweryBody}
        onChange={(e) => setBreweryBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditBrewery;
