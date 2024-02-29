import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface RenderFieldProps extends FieldRenderProps<string> {
  placeholder: string;
}

export const RenderField = ({ input, meta, placeholder, type }: RenderFieldProps) => (
  <div className="mb-4">
    <input {...input} type={type} placeholder={placeholder} className={`input input-bordered w-full ${meta.error && meta.touched ? 'input-error' : ''}`} />
    {meta.error && meta.touched && <span className="text-xs text-error">{meta.error}</span>}
  </div>
);
