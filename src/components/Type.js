import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

function Type() {
  return (
    <TypeWriterEffect
    textStyle={{
        fontFamily: 'Helvetica',
        color: "white",
        fontWeight: 500,
        fontSize: '1.5em',
      }}
      startDelay={2000}
      cursorColor = "white"
      multiText={[
        "Developer",
        "Database Engineer",
        "Aerospace Engineer",
        "Program Manager",
      ]}
      multiTextDelay={1000}
      typeSpeed={30}  
      mulitTextLoop={true}
    />
  );
}

export default Type;
