import React from "react";

function Member({ details }) {
  if (!details) {
    return <h3>Fetching...</h3>;
  }
  return (
    <div className="friendContainer">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>{JSON.stringify(details)}</p>
    </div>
  );
}

export default Member;
