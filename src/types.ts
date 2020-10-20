import { WrappedFormUtils } from 'antd/es/form/Form';

export { FormComponentProps, FormProps, FormItemProps } from 'antd/es/form';
export { GetFieldDecoratorOptions } from 'antd/es/form/Form'

export type FormInstance = WrappedFormUtils<any>

// 表单store
export type Store = {
  [name: string]: any;
};

// 普通对象
export type Obj = {
  [key: string]: any;
};

// 初始值
export type InitialValue = {
  [key: string]: any;
};

// Context
export type ContextValue = {
  form: FormInstance
  initialValue: InitialValue;
};

// render函数
export type RenderType = (
  f: React.ReactNode,
  props: Obj,
) => React.ReactNode | any;

// 是否影藏
export type HiddenType = ((form: FormInstance) => boolean) | boolean;


// export interface IFieldProps extends FormItemProps {
//   id?: string
//   name?: string
//   options?: GetFieldDecoratorOptions
//   fieldKey?: string | string[]
//   hidden?: boolean
//   noStyle?: boolean
// };
