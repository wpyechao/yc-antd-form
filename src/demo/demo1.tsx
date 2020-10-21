/**
 * title: 普通用法
 * desc: JSX 写form
 */

import React from 'react';
import { Col, Input, Row } from 'antd';
import { Form, Field, Submit, Reset } from 'yc-antd-form';

const formLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
  style: { width: 650 },
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
        label="姓名"
        initialValue="init from props"
        rules={[{ required: true }]}
        name="name1"
      >
        <Input placeholder="input" />
      </Field>
      <Field
        required
        label="省市"
      >
        <Row gutter={18}>
          <Col span={12}>
            <Field
              rules={[{ required: true }]}
              name="province"
            >
              <Input placeholder="province" />
            </Field>
          </Col>
          <Col span={12}>
            <Field
              rules={[{ required: true }]}
              name="city"
            >
              <Input placeholder="city" />
            </Field>
          </Col>
        </Row>
      </Field>
      <div style={{ textAlign: 'center' }}>
        <Submit>提交</Submit>
        <Reset>重置</Reset>
      </div>
    </Form>
  );
};

export default NormalForm;
