import { FormInstance } from '@/types';
import React from 'react';

const INITIAL_REF = {} as FormInstance;

export default () => {
  const formRef = React.useRef<FormInstance>(INITIAL_REF);

  return [formRef];
};
