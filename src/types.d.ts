import { WrappedFormUtils } from 'antd/es/form/Form';
export declare type FormInstance = WrappedFormUtils<any>;
export declare type Store = {
    [name: string]: any;
};
export declare type Obj = {
    [key: string]: any;
};
export declare type InitialValue = {
    [key: string]: any;
};
export declare type ContextValue = {
    form: FormInstance;
    initialValue: InitialValue;
};
export declare type HiddenType = ((form: FormInstance) => boolean) | boolean;
