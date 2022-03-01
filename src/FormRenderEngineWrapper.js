import React from 'react';
import FormRenderEngine from './FormRenderEngine';
export default function FormRenderEngineWrapper(props) {
  return (
    <div>
      <h2>Form Render Engine Wrapper</h2>
      <FormRenderEngine {...props} />
    </div>
  );
}
