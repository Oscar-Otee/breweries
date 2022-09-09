import React, { useState } from "react";
import EditBrewery from "./EditBrewery";

function Brewery({ brewery, currentBrewery, onBreweryDelete, onUpdateBrewery }) {
  const [isEditing, setIsEditing] = useState(false);

  const { id, name, brewery_type, street, city, state, postal_code, country, longitude, latitude, phone, created_at: createdAt } = brewery;

  const timestamp = new Date(createdAt).toLocaleTimeString();

  const isCurrentBrewery = currentBrewery.name === name;

  function handleUpdateBrewery(updatedBrewery) {
    setIsEditing(false);
    onUpdateBrewery(updatedBrewery);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:9292/breweries/${id}`, {
      method: "DELETE",
    });

    onBreweryDelete(id);
  }

  return (
    <li>
      <span className="user">{name}</span>
      <span className="time">{timestamp}</span>
      {isEditing ? (
        <EditBrewery
          id={id}
          phone={phone}
          onUpdateBrewery={handleUpdateBrewery}
        />
      ) : (
        <p>{phone}</p>
      )}
      {isCurrentBrewery ? (
        <div className="actions">
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            Update
          </button>
          <button onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      ) : null}
    </li>
  );
}

export default Brewery;
