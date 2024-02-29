import { DataType } from '../types/DataType';
import { User } from '@/app/types/User';
import { Product } from '@/app/types/Product';
import { getUserById } from '@/app/utils/fetchers';

const userConfig = {
  tableTitle: 'Liste des utilisateurs',
  columns: ['Nom', 'Prénom', 'Email', 'Role', 'Actions'],
  tableData: (data: User) => {
    return [data.firstName, data.lastName, data.email, data.userRole, 'Actions'];
  },
  addNewButtonLabel: 'Ajouter un utilisateur',
  modalDelete: {
    title: "Suppression d'un utilisateur",
    body: 'Voulez-vous vraiment supprimer cet utilisateur ?',
    confirmLabel: 'Supprimer',
    cancelLabel: 'Annuler',
  },
};

const productConfig = {
  tableTitle: 'Liste des produits',
  columns: ['Titre', 'Description', 'Prix', 'Owner', 'Créateur', 'Actions'],
  tableData: (data: Product) => {
    return [data.title, data.description, data.price, `${data.owner.firstName} ${data.owner.lastName}`, `${data.userId.firstName} ${data.userId.lastName}`, 'Actions'];
  },
  addNewButtonLabel: 'Ajouter un produit',
  modalDelete: {
    title: "Suppression d'un produit",
    body: 'Voulez-vous vraiment supprimer ce produit ?',
    confirmLabel: 'Supprimer',
    cancelLabel: 'Annuler',
  },
};

export const getConfig = (dataType: DataType) => {
  switch (dataType) {
    case DataType.Users:
      return userConfig;
    case DataType.Products:
      return productConfig;
    default:
      throw new Error('Invalid data type');
  }
};
