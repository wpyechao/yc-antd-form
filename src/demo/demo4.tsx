/**
 * title: 动态增减form
 * desc: 用form config写
 */

import React from 'react';
import { Input, Button, Divider } from 'antd';
import {
  Form,
  useForm,
  ListForm,
  Submit,
  Reset,
  ConfigForm,
} from 'yc-antd-form';

const formLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
  style: { width: 650 },
};

const getConfig = (name, fieldKey) => {
  return [
    {
      name: `users[${name}].first`,
      fieldKey: `users[${fieldKey}].first`,
      children: <Input placeholder="姓" />,
    },
    {
      name: `users[${name}].last`,
      fieldKey: `users[${fieldKey}].last`,
      children: <Input placeholder="名" />,
    },
  ];
};

function App() {
  const [form] = useForm();

  // const update = useUpdate()

  const handleFinish = v => {
    console.log(v);
  };

  return (
    <Form
      {...formLayout}
      wrappedComponentRef={form}
      initialValue={{
        users: [
          { first: 'f1', last: 'l1' },
          { first: 'f2', last: 'l2' },
        ],
      }}
      onFinish={handleFinish}
    >
      <h1>config list form</h1>
      <ListForm name="users">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map(f => (
                <div key={f.key}>
                  <ConfigForm config={getConfig(f.name, f.key)} />
                  <Button onClick={() => remove(f.key)}>删除</Button>
                  <Divider />
                </div>
              ))}
              <Button onClick={() => add()}>添加</Button>
            </div>
          );
        }}
      </ListForm>
      <div style={{ textAlign: 'center' }}>
        <Submit>提交</Submit>
        <Reset>重置</Reset>
      </div>
    </Form>
  );
}

export default App;
