'use client';
import React from 'react';
import { Field, Form } from 'react-final-form';
import axios from 'axios';
import { ProfileFormValues } from '@/app/types/User';
import { validateProfileFormValues } from '@/app/utils/formsValidation';
import { RenderField } from '@/app/components/RenderField';

const Page = () => {
  const [userCreated, setUserCreated] = React.useState(false);
  const onSubmit = async (values: ProfileFormValues) => {
    console.log(values);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', values);
      setUserCreated(true);
      console.log('Server response:', response.data);
    } catch (error: any) {
      console.error('Error during signup:', error.response ? error.response.data : error.message);
    }
  };

  return userCreated ? (
    <p>Utilisateur créé.</p>
  ) : (
    <Form
      onSubmit={onSubmit}
      validate={validateProfileFormValues}
      render={({ handleSubmit, submitting, pristine, hasValidationErrors }) => (
        <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
          <Field name="firstName" component={RenderField} type="text" placeholder="Prénom" />
          <Field name="lastName" component={RenderField} type="text" placeholder="Nom" />
          <Field name="email" component={RenderField} type="email" placeholder="Email" />
          <Field name="password" component={RenderField} type="password" placeholder="Mot de passe" />
          <Field name="userRole" component="select" placeholder="Rôle" className="select select-bordered w-full mb-4">
            <option disabled value="">
              Sélectionnez votre rôle
            </option>
            <option value="user">Utilisateur</option>
            <option value="admin">Admin</option>
          </Field>
          <button type="submit" disabled={submitting || pristine || hasValidationErrors} className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>
      )}
    />
  );
};

export default Page;
