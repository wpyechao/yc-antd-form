import { ContextValue } from './../types';
import React from 'react';

const DEFAULT_CONTEXT_VALUE = {} as ContextValue;

const FormContext = React.createContext(DEFAULT_CONTEXT_VALUE);
FormContext.displayName = 'YcAntdForm'

const { Provider } = FormContext;
const useFormContext = () => React.useContext(FormContext);

export { Provider, FormContext, useFormContext };
