import * as React from 'react';
import get from 'lodash.get';
import { Form } from 'antd';
import { useFormContext } from '../Context';
import {
  HiddenType,
  FormItemProps,
  FormInstance,
  GetFieldDecoratorOptions
} from '../types';

export interface IFieldProps extends FormItemProps {
  id?: string
  name?: string
  options?: GetFieldDecoratorOptions
  fieldKey?: string | string[]
  hidden?: boolean
  noStyle?: boolean
};

const Field: React.FC<IFieldProps> = (props) => {
  const { form, initialValue } = useFormContext();
  const {
    name,
    options,
    fieldKey,
    hidden = false,
    children,
    noStyle = false,
    ...restProps
  } = props;

  if (calculateHidden(form, hidden)) return null;

  // // name 存在，用作表单
  if(name) {
    // 优先使用props里面的initialValue
    // fieldKey 用于ListForm
    const field = form.getFieldDecorator(name, {
      initialValue: get(initialValue, (fieldKey || name)), 
      ...options,
    })(children)

    if(noStyle) {
      return (
        <React.Fragment>
          {field}
        </React.Fragment>
      )
    }

    return (
      <Form.Item {...restProps}>
        {field}
      </Form.Item>
    );
  } else {
    // name不存在，直接使用children
    if(noStyle)
      return (
        <React.Fragment>{children}</React.Fragment>
      )
      
    return (
      <Form.Item {...restProps}>
        {children}
      </Form.Item>
    )
  }
};

export default Field;

// 计算出是否隐藏
function calculateHidden(form: FormInstance, hidden?: HiddenType) {
  const res = typeof hidden === 'function' ? hidden(form) : hidden;

  return !!res;
}
