/**
 * title: 普通用法
 * desc: 用 form config 写form
 */

import React from 'react';
import { Input } from 'antd';
import {
  Form,
  useForm,
  ConfigForm,
  Submit,
  Reset,
} from 'yc-antd-form';
import { truncateSync } from 'fs';

const formLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
  style: { width: 650 },
};

const inlineConfig = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const config = [
  {
    label: '姓名',
    name: 'name',
    rules: [{ required: true }],
    children: <Input />,
  },
  {
    id: 'pac',
    label: '省市',
    required: true,
    children: [
      {
        name: 'province',
        rules: [{ required: true }],
        children: <Input />,
      },
      {
        name: 'city',
        rules: [{ required: true }],
        children: <Input />,
      },
    ],
  },
];

const ConfigFormPage = props => {
  const [form] = useForm();

  const handleFinish = v => {
    console.log(form.current)
    console.log(v);
  };

  return (
    <Form
      wrappedComponentRef={form}
      initialValue={{
        city: 'city',
      }}
      onFinish={handleFinish}
      {...formLayout}
    >
      <h1>Config Form</h1>
      <ConfigForm config={config} />
      <div style={{ textAlign: 'center' }}>
        <Submit>提交</Submit>
        <Reset>重置</Reset>
      </div>
    </Form>
  );
};

export default ConfigFormPage;
