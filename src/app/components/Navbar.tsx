'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '@/app/state/atom';
import { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';

export default function Navbar() {
  /* Vars */
  const router = useRouter();
  const setUserState = useSetRecoilState(userState);
  const { isLogged, cart, userRole, userId } = useRecoilValue(userState);
  const productsSubtotal = cart.reduce((acc, product) => acc + Number(product.price), 0);

  /* Functions */
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');

    setUserState({
      isLogged: false,
      userRole: '',
      userId: '',
      userToken: '',
      cart: [],
    });
    router.push('/');
  };

  /* Effects */
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userRole = localStorage.getItem('userRole');
    const userId = localStorage.getItem('userId');

    if (userToken && userRole && userId) {
      setUserState(prevState => {
        return {
          ...prevState,
          isLogged: true,
          userId,
          userRole,
        };
      });
    }
  }, [cart, setUserState]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost text-xl">
          <FaHome />
        </Link>
      </div>
      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-primary">{cart.length}</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">
                {cart.length} {cart.length > 1 ? 'produits' : 'produit'}
              </span>
              <span className="text-info">Sous total: {productsSubtotal}€</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">Acheter</button>
              </div>
            </div>
          </div>
        </div>
        {isLogged ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {userRole === 'user' && (
                <li>
                  <Link href={`/${userId}/product`}>Mes produits</Link>
                </li>
              )}
              {userRole === 'admin' && (
                <li>
                  <Link href={'/dashboard'}>Dashboard</Link>
                </li>
              )}
              <li onClick={handleLogout}>
                <a>Déconnexion</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={'/login'}>Se connecter</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
