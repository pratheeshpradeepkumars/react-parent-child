import React from 'react';
import FormRenderEngineWrapper from './FormRenderEngineWrapper';
import Actions from './Actions';
import './style.css';

export default function FormEngineModule() {
  return (
    <div>
      <h1>Form Engine Module</h1>
      <FormRenderEngineWrapper>
        <Actions />
      </FormRenderEngineWrapper>
    </div>
  );
}
