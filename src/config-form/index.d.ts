import * as React from 'react';
import { IFieldProps } from '../field';
interface IFieldPropsWithArray extends IFieldProps {
    id?: string;
    children: React.ReactNode | IFieldPropsWithArray[];
}
interface IConfigFormProps {
    config: IFieldPropsWithArray[];
}
declare const ConfigForm: React.FC<IConfigFormProps>;
export default ConfigForm;
