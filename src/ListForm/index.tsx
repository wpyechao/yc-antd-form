import React, { useCallback, useEffect } from 'react';
import get from 'lodash.get';
import { useArray, useNumber } from 'yc-hooks';
import { useFormContext } from '../Context';
import { Obj } from '../types';

const getFields = (num: number): Field[] => {
  return new Array(num)
    .fill(1)
    .map((i, ii) => ({ key: ii, fieldKey: ii, name: ii }));
};

type Field = {
  key: number;
  fieldKey: number;
  name: number;
};

type Add = (field?: Field) => void;

type Remove = (key: number) => void;

type Methods = {
  add: Add;
  remove: Remove;
};

type ListFormProps = {
  name: string;
  children: (fields: Field[], methods: Methods) => React.ReactNode | any;
  initialLength?: number;
};

const ListForm: React.FC<ListFormProps> = props => {
  const { form, initialValue = {} } = useFormContext();
  const { name, children, initialLength = 0 } = props;

  // 对象里面每个字段都是undefined的或者非真的值需要去掉
  const fieldLength = (get(initialValue, name, []).filter((i: Obj | string) => {
    if (typeof i === 'object') {
      return !Object.keys(i).every(k => i[k] === void 0);
    } else {
      return !!i;
    }
  }).length || initialLength) as number;

  const [key, { increment, set: setKey }] = useNumber(0);

  const [
    fields,
    { remove: removeField, push: pushField, set: setFields },
  ] = useArray<Field>([]);

  // 设置初始fields的长度
  useEffect(() => {
    setKey(fieldLength);
    setFields(getFields(fieldLength));
  }, [fieldLength, setFields, setKey]);

  // 添加一个
  const add = useCallback(
    field => {
      // add field
      pushField({ key, fieldKey: key, name: key });
      increment();

      // todo add value
      if (field) {
        // const formValue = form.getFieldsValue();
        // const values = get(formValue, name, [])
        // Promise.resolve(values.concat(field)).then(res => {
        //   form.setFieldsValue({
        //     [name]: res,
        //   });
        // });
      }
    },
    [increment, key, pushField],
  );

  // 删除一个
  const remove = useCallback(
    key => {
      // 需要删除的第几个
      const index = fields.findIndex(i => i.key === key);
      // remove field
      removeField((f: Field, i: number) => i === index);
      // removeValue
      const formValue = form.getFieldsValue();
      const values = get(formValue, name, []);

      Promise.resolve(values.filter((_: any, i: number) => i !== index)).then(
        res => {
          form.setFieldsValue({
            [name]: res,
          });
        },
      );
    },
    [fields, form, name, removeField],
  );

  return children(
    fields.map((f, i) => ({ ...f, name: i })),
    { add, remove },
  );
};

export { ListForm };
