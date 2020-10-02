import React, { useState } from "react";
import { NameRenderer } from "./nameRenderer";

export const Name = () => {
  const [ name, setName ] = useState("");

  const handleChange = (ev) => {
    setName(ev.target.value);
  }
  
  return (
    <>
      <form autoComplete="off">
        <input type="hidden" autoComplete="false"/>
        <label htmlFor="name">Name:</label>
        <input aria-label="name-input" type="text" id="name" name="name" value={name} onChange={handleChange} />
      </form>
      <NameRenderer name={name}/>
    </>
  )
}