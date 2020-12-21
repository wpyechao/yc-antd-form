import { usePersistFn } from 'yc-hooks'
import get from 'lodash.get'
import * as React from 'react'
import { useFormContext } from '../context'

interface IMethods {
  add: (value?: any) => void,
  remove: (key: number) => void
}

interface TField {
  key: number
  /** fieldKey 用于控制表单项 */
  fieldKey: number
  name: number
}

export interface IListFormProps {
  /** 数组的传到后端的名称 */
  name: string,
  children: (fields: TField[], methods: IMethods) => React.ReactElement
}

/** 动态增减表单 */
const ListForm: React.FC<IListFormProps> = (props) => {
  const { name, children } = props
  const { form, initialValue } = useFormContext()

  const initialList = React.useMemo<any[]>(() => {
    return initialValue?.[name] || []
  }, [initialValue, name])

  React.useEffect(() => {
    setKey(initialList.length)
    setFields(initialList.map((_, i) => ({ key: i, fieldKey: i, name: i })))
  }, [initialList])

  // 表单的key 一直往上增 确保不重复
  const [key, setKey] = React.useState(0)

  // 表单项数组
  const [fields, setFields] = React.useState<TField[]>([])

  /** 添加一个 */
  const add = usePersistFn<IMethods['add']>((value) => {
    setFields((f) => f.concat({ key, fieldKey: key, name: 0 }))
    setKey(((k) => k + 1))

    if (value) {
      // 添加field
      Promise.resolve((form.getFieldsValue()[name] || []).concat(value)).then((res) => {
        form.setFieldsValue({
          [name]: res,
        })
      })
    }
  })

  /** 删除一个 */
  const remove = usePersistFn<IMethods['remove']>((k) => {
    setFields((fs) => fs.filter((f) => f.key !== k))

    const formValue: any[] = get(form.getFieldsValue(), name, [])

    const index = fields.findIndex((f) => f.key === k)

    Promise.resolve(formValue.filter((v, i) => i !== index)).then((res) => {
      form.setFieldsValue({
        [name]: res,
      })
    })
  })

  return children(
    fields.map((f, i) => ({...f, name: i})),
    {
      add,
      remove,
    },
  )
}

export { ListForm }
