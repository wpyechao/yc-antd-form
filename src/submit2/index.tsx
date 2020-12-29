import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

// 提交的按钮
const Submit: React.FC<ButtonProps> = props => {
  return <Button htmlType="submit" type="primary" {...props} />;
};

export default Submit
