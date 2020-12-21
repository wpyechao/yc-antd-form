import * as React from 'react';
interface IMethods {
    add: (value?: any) => void;
    remove: (key: number) => void;
}
interface TField {
    key: number;
    /** fieldKey 用于控制表单项 */
    fieldKey: number;
    name: number;
}
export interface IListFormProps {
    /** 数组的传到后端的名称 */
    name: string;
    children: (fields: TField[], methods: IMethods) => React.ReactElement;
}
/** 动态增减表单 */
declare const ListForm: React.FC<IListFormProps>;
export { ListForm };
