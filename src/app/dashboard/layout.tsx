'use client';
import { Inter } from 'next/font/google';
import Sidebar from '@/app/components/Sidebar';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { userState } from '@/app/state/atom';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* Vars */
  const setUserState = useSetRecoilState(userState);
  const router = useRouter();

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

  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-10 ml-64">
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleLogout}>
                      <a>Déconnexion</a>
                    </li>
                  </ul>
                </div>
              </div>
              {children}
            </div>
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
