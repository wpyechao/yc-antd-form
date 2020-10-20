import React from 'react';
import { Obj } from '../types';
declare type Field = {
    key: number;
    fieldKey: number;
    name: number;
};
declare type Add = (field?: Obj) => void;
declare type Remove = (key: number) => void;
declare type Methods = {
    add: Add;
    remove: Remove;
};
declare type ListFormProps = {
    name: string;
    children: (fields: Field[], methods: Methods) => React.ReactNode | any;
    initialLength?: number;
};
declare const ListForm: React.FC<ListFormProps>;
export { ListForm };
