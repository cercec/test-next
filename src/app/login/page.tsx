'use client';
import React from 'react';
import { Form, Field } from 'react-final-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { userState } from '@/app/state/atom';
import Navbar from '@/app/components/Navbar';

interface LoginFormValues {
  email: string;
  password: string;
}

const Page = () => {
  /* Vars */
  const router = useRouter();
  const setUserState = useSetRecoilState(userState);

  /* Functions */
  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', values);
      console.log('Server response:', response.data);
      // Exemple de réponse : { token: '...', userRole: 'admin' }
      const { userRole, userId, token } = response.data;
      console.log(response.data);

      localStorage.setItem('userToken', token);
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('userId', userId);

      setUserState({
        isLogged: Boolean(token),
        userRole,
        userId,
        userToken: token,
        cart: [],
      });

      // Redirige l'utilisateur en fonction de son rôle
      if (userRole === 'admin') {
        router.push('/dashboard/products');
      } else {
        router.push('/');
      }
    } catch (error: any) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      // Handle login error here
    }
  };
  const validate = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  return (
    <RecoilRoot>
      <Navbar />
      <div className=" flex justify-center align-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, submitting, pristine, hasValidationErrors }) => (
                <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
                  <label className="input input-bordered flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <Field name="email" component={'input'} type="email" className="grow" placeholder="Email" />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Field name="password" component={'input'} type="password" className="grow" placeholder="Mot de passe" />
                  </label>
                  <button type="submit" disabled={submitting || pristine || hasValidationErrors} className="btn btn-primary w-full mt-4">
                    Log In
                  </button>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default Page;
