import React, { useState } from 'react';

export default function FormRenderEngine(props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h3>Form Render Engine</h3>
      <input value={inputValue} onChange={handleChange} />
      {React.cloneElement(props.children, {
        formData: inputValue,
      })}
    </div>
  );
}
