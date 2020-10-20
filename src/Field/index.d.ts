import * as React from 'react';
import { FormItemProps, GetFieldDecoratorOptions } from '../types';
export interface IFieldProps extends FormItemProps {
    id?: string;
    name?: string;
    options?: GetFieldDecoratorOptions;
    fieldKey?: string | string[];
    hidden?: boolean;
    noStyle?: boolean;
}
declare const Field: React.FC<IFieldProps>;
export default Field;
