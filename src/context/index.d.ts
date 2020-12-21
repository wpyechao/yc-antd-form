import { ContextValue } from './../types';
import React from 'react';
declare const FormContext: React.Context<ContextValue>;
declare const Provider: React.Provider<ContextValue>;
declare const useFormContext: () => ContextValue;
export { Provider, FormContext, useFormContext };
