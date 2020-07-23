import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 1px solid black;
  box-shadow: 5px 5px 5px gray;
`;
function Member({ details }) {
  if (!details) {
    return <h3>Fetching...</h3>;
  }
  return (
    <StyledDiv className="friendContainer">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>{JSON.stringify(details)}</p>
    </StyledDiv>
  );
}

export default Member;
