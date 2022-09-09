import React, { useState } from "react";

function EditRetail({ id, name, onUpdateRetail }) {
  const [retailName, setRetailName] = useState(name);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/retails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: retailName,
      }),
    })
      .then((r) => r.json())
      .then((updatedRetail) => onUpdateRetail(updatedRetail));
  }

  return (
    <form className="edit-retail" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        autoComplete="off"
        value={retailName}
        onChange={(e) => setRetailName(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditRetail;
