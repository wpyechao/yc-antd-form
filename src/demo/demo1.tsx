/**
 * title: 普通用法
 * desc: JSX 写form
 */

import React from 'react';
import { Input } from 'antd';
import { Form, Field, Submit, Reset } from 'yc-antd-form';

const formLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
  style: { width: 650 },
};

const inlineConfig = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const NormalForm = () => {

  const handleFinish = v => {
    console.log(v);
  };

  return (
    <Form
      initialValue={{
        city: 'city',
      }}
      onFinish={handleFinish}
      {...formLayout}
    >
      <h1>Normal Form</h1>
      <Field
        itemProps={{ label: '姓名' }}
        initialValue="init from props"
        name="name1"
      >
        <Input placeholder="input" />
      </Field>
      <Field
        itemProps={{ label: '省市', required: true, gutter: 24 }}
      >
        <Field
          itemProps={{ span: 12 }}
          noStyle
          rules={[{ required: true }]}
          name="province"
        >
          <Input placeholder="province" />
        </Field>
        <Field
          itemProps={{ span: 12 }}
          noStyle
          rules={[{ required: true }]}
          name="city"
        >
          <Input placeholder="city" />
        </Field>
      </Field>
      <Field itemProps={{ wrapperCol: { span: 24 } }}>
        <Field
          rules={[{ required: true }]}
          itemProps={{ span: 12, label: 'inline1', ...inlineConfig }}
          name="inline1"
          noStyle
        >
          <Input />
        </Field>
        <Field
          rules={[{ required: true }]}
          itemProps={{ span: 12, label: 'inline2', ...inlineConfig }}
          name="inline2"
          noStyle
        >
          <Input />
        </Field>
        <Field
          rules={[{ required: true }]}
          itemProps={{ span: 12, label: 'inline3', ...inlineConfig }}
          name="inline3"
          noStyle
        >
          <Input />
        </Field>
      </Field>
      <div style={{ textAlign: 'center' }}>
        <Submit>提交</Submit>
        <Reset>重置</Reset>
      </div>
    </Form>
  );
};

export default NormalForm;
