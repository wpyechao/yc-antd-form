import * as React from 'react';
import Field, { IFieldProps } from '../field';

interface IFieldPropsWithArray extends IFieldProps {
  id?: string
  children: React.ReactNode | IFieldPropsWithArray[]
}

interface IConfigFormProps {
  config: IFieldPropsWithArray[];
};

const ConfigForm: React.FC<IConfigFormProps> = props => {
  const { config = [] } = props;

  const res = React.useMemo(
    () =>
      config.map((c) => {
        if (Array.isArray(c.children) && c.children.length) {
          const { children, id, ...restProps } = c
          return (
            <Field key={id} {...restProps}>
              <ConfigForm config={c.children as IFieldPropsWithArray[]} />
            </Field>
          );
        }

        return <Field key={(c.id || c.name)?.toString()} {...c} />;
      }),
    [config],
  )

  return res as React.ReactNode | any;
};

export default ConfigForm
