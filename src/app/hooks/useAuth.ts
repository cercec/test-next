'use client';
import { useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';

const useAuth = () => {
  useLayoutEffect(() => {
    const isAuth = localStorage.getItem('userToken') !== null && localStorage.getItem('userRole') === 'admin';
    if (!isAuth) {
      redirect('/');
    }
  }, []);
};

export default useAuth;
