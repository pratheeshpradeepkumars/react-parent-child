import React from 'react';

export default function Actions({ formData }) {
  function getFormData(data) {
    console.log('Data : ', formData);
  }
  return (
    <div>
      <h4>Actions</h4>
      <button onClick={getFormData}>OK</button>
    </div>
  );
}
