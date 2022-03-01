import React from 'react';

export default function Actions({ formData }) {
  function getFormData(data) {
    console.log('Data : ', formData);
  }
  return (
    <div>
      <h1>Actions</h1>
      <button onClick={getFormData}>OK</button>
    </div>
  );
}
