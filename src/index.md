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

<code src="./demo/demo1.tsx" />

## 样式按需加载

**已经自动集成了按需加载**

## Api

### hook

有一个跟 antd4 很像的 useForm，返回的 form 是个 ref，所以需要使用 validateFields 等方法的时候需要通过 form.current.validateFields 去获取

```javascript
import { useForm, Form } from 'yc-antd-form';

const App = () => {
  const [form] = useForm();

  useEffect(() => {
    // form方法的获取方式有点不一样，要从current里面获取
    const { validateFields } = form.current;
  }, [])

  return <Form wrappedComponentRef={form} />;
};
```

### components

#### 1. Form

最顶层的表单组件，只要有用到表单的就必须使用这个，搭配 useForm，创建出表单上下文

| 参数           | 说明                                                    | 类型            |
| -------------- | ------------------------------------------------------- | --------------- |
| wrappedComponentRef   | useForm 返回的 ref                  | ref       |
| initialValue   | 表单的初始值，可用于表单回显等                          | object          |
| onFinish       | 直接能拿到表单值的提交回调， 和 onSubmit 同时存在时无效 | (value) => void |
| onFinishFailed | 验证失败的回调，有 onSubmit 时无效                      | (error) => void |
| 其他           | 其他所有 antd3 Form 支持的props                          |                 |

比如 ↓


#### 2. Field

表单 item 组件

| 参数      | 说明                        | 类型                            |
| --------- | ------------------------------ | ------------------------------- |
| name      | 表单键名             | string          
| fieldKey  | 动态增减表单需要用到的字段   | string    |
| hidden    | 是否在页面中隐藏           | boolean          | (form) => boolean ||
| 其他      | 其他所有 getFieldDecorator 的 options 支持的参数 和 Form.Item支持的props    |       |

#### 3. Reset

重置表单所用到的按钮

参数是所有 antd Button 支持的参数，只有 onClick 被绑定成重置表单

#### 4. Submit

触发表单提交用到的按钮

参数是所有 antd Button 支持的参数，只是定义了默认的 htmlType="submit" 和 type="primary"

#### 5. ConfigForm

用 js 对象和数组写 form 用到的组件

配置数组

| 参数   | 说明      | 类型               |
| ------ | --------- | ------------------ |
| config | 配置数组  | []                 |
|        | 数组 item | Field 组件的 props |

具体用法 ↓

<code src="./demo/demo2.tsx" />

#### 6. ListForm

<code src="./demo/demo3.tsx" />

-----------------

<code src="./demo/demo4.tsx" />
