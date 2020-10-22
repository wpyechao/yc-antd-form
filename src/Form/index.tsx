import * as React from 'react';
import { Form as AntdForm } from 'antd';
import { Provider } from '../Context';

import { InitialValue, Store, FormInstance } from './../types';
import { FormComponentProps, FormCreateOption, FormProps } from 'antd/es/form';

export interface IFormProps extends FormComponentProps, FormProps {
  form: FormInstance
  initialValue: InitialValue;
  onFinish?: (s: Store | any) => Promise<Store> | void;
  onFinishFailed?: (e: Error) => void;
}

// 普通的form组件
const Form: React.FC<IFormProps> = React.forwardRef<FormInstance, IFormProps>((props, ref) => {
  const {
    form,
    initialValue,
    children,
    onFinish = (v) => v, // 默认的submit方法
    onFinishFailed = console.error, // 验证失败的回调
    ...restFormProps
  } = props;

  // 向上抛出form
  React.useImperativeHandle(ref, () => (form))

  // 默认的submit方法
  const handleFinish = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
      form.validateFieldsAndScroll((err: Error, values: Store) => {
        if (!err) {
          resolve(values);
        } else reject(err);
      });
    })
      .then(onFinish)
      .catch(onFinishFailed);
  }, []);

  return (
    <Provider value={{ form, initialValue }}>
      <AntdForm {...restFormProps} onSubmit={handleFinish}>
        {children}
      </AntdForm>
    </Provider>
  );
})

export default AntdForm.create<IFormProps>()(Form)

export const extendForm = (options: FormCreateOption<IFormProps>) => AntdForm.create<IFormProps>(options)(Form)
