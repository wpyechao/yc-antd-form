import * as React from 'react';
import { Button } from 'antd';
import { useFormContext } from '../Context';

import { ButtonProps } from 'antd/es/button';

// 重置的按钮
const Reset: React.FC<ButtonProps> = props => {
  const { form } = useFormContext();

  const handleReset = React.useCallback(() => {
    form.resetFields();
  }, []);

  return <Button {...props} onClick={handleReset} />;
};

export default Reset
