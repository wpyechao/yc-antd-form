import * as React from 'react';
import { IFieldProps } from '../types';
interface IFieldPropsWithArray extends IFieldProps {
    children: React.ReactNode | IFieldPropsWithArray[];
}
interface IConfigFormProps {
    config: IFieldPropsWithArray[];
}
declare const ConfigForm: React.FC<IConfigFormProps>;
export default ConfigForm;
