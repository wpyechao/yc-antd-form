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
    itemProps: { label: '姓名' },
    name: 'name',
    initialValue: 'init from config/props',
    children: <Input />,
  },
  {
    id: 'pac',
    itemProps: { label: '省市', required: true, gutter: 24 },
    children: [
      {
        itemProps: { span: 12 },
        noStyle: true,
        name: 'province',
        children: <Input />,
      },
      {
        itemProps: { span: 12 },
        noStyle: true,
        name: 'city',
        children: <Input />,
      },
    ],
  },
  {
    id: 'inline',
    itemProps: { wrapperCol: { span: 24 } },
    children: [
      {
        rules: [{ required: true }],
        noStyle: true,
        itemProps: { span: 12, label: 'inline1', ...inlineConfig },
        name: 'inline1',
        children: <Input />,
      },
      {
        rules: [{ required: true }],
        noStyle: true,
        itemProps: { span: 12, label: 'inline3', ...inlineConfig },
        name: 'inline3',
        children: <Input />,
      },
    ],
  },
];

const ConfigFormPage = props => {
  const [form] = useForm();

  const handleFinish = v => {
    console.log(v);
  };

  return (
    <Form
      form={form}
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
