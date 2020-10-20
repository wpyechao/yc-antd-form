---
group:
  title: Form
  path: '/form'
---

# Form

更加方便快捷地书写 antd3 表单，可以使用 jsx 的写法，也可以使用配置式的写法

## 基本例子

```jsx
import React from 'react';
import { Form, useForm, Field, Submit, Reset } from 'yc-antd-form';
import { Input } from 'antd';

export default () => {

  const handleFinish = v => {
    console.log(v);
    // console.log(form)
  };

  return (
    <Form style={{ width: 300 }} onFinish={handleFinish}>
      <Field name="account">
        <Input placeholder="请输入" />
      </Field>
      <Field name="password">
        <Input type="password" placeholder="请输入" />
      </Field>
      <Submit style={{ marginBottom: 16 }} block>
        提交
      </Submit>
      <Reset block>重置</Reset>
    </Form>
  );
};
```

## 进阶用法

## 样式按需加载

**注意：版本 1.0.8 及以上已经自动集成了按需加载，可以不用配置**

由于封装了 antd 的组件，所以需要重新配置按需加载，配置方式很简单，只需如下操作

基于 babel-plugin-import 如果没安装要先安装 babel-plugin-import

```javascript
const importConfig = require('yc-antd-form/es/import.config');

// 配置到babel-loader的 plugin中去
const options = {
  plugins: [
    // 其他的plugin
    [],
    ...importConfig,
  ],
};
```

## Api

### hook

有一个跟 antd4 很像的 useForm，返回的 form 是个 ref，所以需要使用 validateFields 等方法的时候需要通过 form.current.form.validateFields 去获取

```javascript
import { useForm, Form } from 'yc-antd-form';

const App = () => {
  const [form] = useForm();
  // form方法的获取方式有点不一样
  const { validateFields } = form.current;

  return <Form wrappedComponentRef={form} />;
};
```

### components

#### 1. Form

最顶层的表单组件，只要有用到表单的就必须使用这个，搭配 useForm，创建出表单上下文

| 参数           | 说明                                                    | 类型            |
| -------------- | ------------------------------------------------------- | --------------- |
| form           | useForm 返回的 ref                                      | ref             |
| initialValue   | 表单的初始值，可用于表单回显等                          | object          |
| onFinish       | 直接能拿到表单值的提交回调， 和 onSubmit 同时存在时无效 | (value) => void |
| onFinishFailed | 验证失败的回调，有 onSubmit 时无效                      | (error) => void |
| onSubmit       | 原始的表单的回调                                        | (e) => void     |
| 其他           | 其他所有 antd3 Form 支持的参数                          |                 |

**新增一个 form.getSelectedFieldsValue(selector)方法，用于对表单值进行过滤**

比如 ↓

```javascript
// 转换moment对象
const values = form.getSelectedFieldsValue((v) => {
  if(v instanceof moment)
    return v.valueOf()
  return v
})

// 转换文件数组
const values = form.getSelectedFieldsValue((v) => {
  if(Array.isArray(v)) {
    return v.filter(i => i.status === 'done)
  }
  return v
})
```

#### 2. Field

表单 item 组件

| 参数      | 说明                                                                              | 类型                            |
| --------- | --------------------------------------------------------------------------------- | ------------------------------- |
| name      | 表单键名                                                                          | string                          |
| hidden    | 是否在页面中隐藏                                                                  | boolean                         | (form) => boolean |
| itemProps | 默认是 Form.Item 组件上的参数，也可以在自定义 render 的方法中拿到，作用到其他地方 | object                          |
| render    | 自定义表单组件样式的函数                                                          | (field, itemProps) => ReactNode |
| fieldKey  | 动态增减表单需要用到的字段                                                        | string                          |
| 其他      | 其他所有 getFieldDecorator 的 options 支持的参数                                  |                                 |

#### 3. Reset

重置表单所用到的按钮

参数是所有 antd Button 支持的参数，只有 onClick 被绑定成重置

#### 4. Submit

触发表单提交用到的按钮

参数是所有 antd Button 支持的参数，定义了默认的 htmlType="submit" 和 type="primary"

#### 5. ConfigForm

用 js 对象和数组写 form 用到的组件

配置数组

| 参数   | 说明      | 类型               |
| ------ | --------- | ------------------ |
| config | 配置数组  | []                 |
|        | 数组 item | Field 组件的 props |

具体用法 ↓

#### 6. ListForm

