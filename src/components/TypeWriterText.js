import React, { useEffect, useState } from 'react';
import TypeIt from 'typeit-react';

const TypeWriterText = ({ text }) => {
  
  return (
    <div className="App">
      <TypeIt as={"p"}
        options={{
          strings: text,
          speed: 50,
          waitUntilVisible: true,
        }}
      />
    </div>
  );
};

export default TypeWriterText;
