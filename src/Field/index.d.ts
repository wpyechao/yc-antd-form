import * as React from 'react';
import { GetFieldDecoratorOptions } from 'antd/es/form/Form';
import { FormItemProps } from 'antd/es/form';
export interface IFieldProps extends GetFieldDecoratorOptions, FormItemProps {
    id?: string;
    name?: string;
    fieldKey?: string | string[];
    hidden?: boolean;
    noStyle?: boolean;
}
declare const Field: React.FC<IFieldProps>;
export default Field;
