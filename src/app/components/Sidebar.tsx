import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed">
      <div className="p-5">
        <Link href="/">
          <span>&larr; Retour à l&apos;accueil</span>
        </Link>
      </div>
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard/products" className="flex items-center space-x-2 p-2 hover:bg-gray-700">
            <span>Liste des produits</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/users" className="flex items-center space-x-2 p-2 hover:bg-gray-700">
            <span>Liste des utilisateurs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
