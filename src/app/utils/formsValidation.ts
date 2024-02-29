import { ProfileFormValues } from '@/app/types/User';
import { ProductFormValues } from '@/app/types/Product';

export const validateProfileFormValues = (values: ProfileFormValues) => {
  const errors: Partial<ProfileFormValues> = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.userRole) {
    errors.userRole = 'Required';
  }
  return errors;
};

export const validateProductFormValues = (values: ProductFormValues) => {
  const errors: Partial<ProductFormValues> = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  if (values.price == null) {
    errors.price = 'Required';
  } else if (Number(values.price) <= 0) {
    errors.price = 'Price must be greater than 0';
  }

  return errors;
};
