'use client';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { DataType } from '../types/DataType';
import { getConfig } from '@/app/config/dataTypeConfig';
import { User } from '@/app/types/User';
import { Product } from '@/app/types/Product';
import { Modal } from '@/app/components/Modal';
import { deleteItem, editItem, postItem } from '@/app/utils/crud';
import ProductForm from '@/app/dashboard/products/components/ProductForm';
import ProfileForm from '@/app/dashboard/users/components/ProfileForm';
import { getAllUsers } from '@/app/utils/fetchers';

interface Props {
  dataType: DataType;
  showFilter?: boolean;
}

const GenericListPage: React.FC<Props> = ({ dataType, showFilter }) => {
  /* Vars */
  const [data, setData] = useState<User[] | Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | ''>('');
  const [selectedItem, setSelectedItem] = useState<User | Product | null>(null);
  const config = getConfig(dataType);
  const disableDeleteForUsers = dataType === DataType.Users && data.length === 1;
  const filteredProducts = selectedUserId ? (data as Product[]).filter((product: Product) => product.owner._id === selectedUserId) : data;

  /* Functions */
  const openModal = (type: 'add' | 'edit' | 'delete', item?: any) => {
    setModalType(type);
    setShowModal(true);
    setSelectedItem(item || null);
  };

  const fetchUsers = useCallback(async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const endpoint = dataType === DataType.Users ? 'users' : 'products';
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        })
        .then(res => setData(res.data[dataType]));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [dataType]);

  const handleAdd = useCallback(
    async (item: User | Product) => {
      try {
        await postItem(dataType, item);
        setShowModal(false);
        fetchData();
      } catch (error) {
        console.error('Error post item:', error);
      }
    },
    [dataType, fetchData],
  );

  const handleEdit = useCallback(
    async (item: User | Product) => {
      try {
        await editItem(dataType, item);
        setShowModal(false);
        fetchData();
      } catch (error) {
        console.error('Error editing item:', error);
      }
    },
    [dataType, fetchData],
  );

  const handleDelete = useCallback(
    async (item: User | Product) => {
      try {
        await deleteItem(dataType, item);
        setShowModal(false);
        fetchData();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    [dataType, fetchData],
  );

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedUserId(event.target.value);
  };

  /* Effects */
  useEffect(() => {
    fetchData();
    fetchUsers();
  }, [fetchData, fetchUsers]);

  /* Render */

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between pb-8">
        <h1 className="text-xl font-bold mb-4">{config.tableTitle}</h1>
        {dataType === DataType.Products && showFilter && (
          <label className="form-control w-full max-w-xs">
            <div className="label flex justify-end">
              <span className="label-text">Filtrer les produits qui appartienne à un utilisateur</span>
            </div>
            <select className="select select-bordered" onChange={handleUserChange}>
              <option value="">Tous les utilisateurs</option>
              {users.map(user => (
                <option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      {(dataType === DataType.Products ? filteredProducts : data).length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              {config.columns.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item: User | Product) => {
              const rowData = config.tableData(item as User & Product);

              return (
                <tr key={item._id}>
                  {rowData.map((cell, index) => {
                    if (index === rowData.length - 1) {
                      return (
                        <td key={index}>
                          <button className="btn btn-blue mr-2" onClick={() => openModal('edit', item)}>
                            Editer
                          </button>
                          <button className="btn btn-red" disabled={disableDeleteForUsers} onClick={() => openModal('delete', item)}>
                            Supprimer
                          </button>
                        </td>
                      );
                    } else {
                      return <td key={index}>{cell}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div role="alert" className="alert">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{dataType === DataType.Products && 'Aucun produit.'}</span>
        </div>
      )}
      <div className="w-full flex justify-end mt-7">
        <button className="btn bg-blue-600 hover:bg-blue-700 text-white" onClick={() => openModal('add')}>
          {config.addNewButtonLabel}
        </button>
      </div>

      {/* Modale d'ajout */}
      {showModal && modalType === 'add' && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-xl">
              <div className="p-4">
                {dataType === DataType.Users ? (
                  <ProfileForm mode="add" handleSubmit={handleAdd as (user: User) => void} confirmText="Ajouter" handleClose={() => setShowModal(false)} title="Ajouter un profil" />
                ) : (
                  <ProductForm handleSubmit={handleAdd as (product: Product) => void} confirmText="Ajouter" handleClose={() => setShowModal(false)} title="Ajouter un produit" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modale d'édition */}
      {showModal && modalType === 'edit' && selectedItem && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-xl">
              <div className="p-4">
                {dataType === DataType.Users ? (
                  <ProfileForm
                    mode="edit"
                    selectedItem={selectedItem as User}
                    handleSubmit={handleEdit as (user: User) => void}
                    confirmText="Editer"
                    handleClose={() => setShowModal(false)}
                    title="Editer un profil"
                  />
                ) : (
                  <ProductForm
                    selectedItem={selectedItem as Product}
                    handleSubmit={handleEdit as (product: Product) => void}
                    confirmText="Editer"
                    handleClose={() => setShowModal(false)}
                    title="Editer un produit"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modale de suppression */}

      {showModal && modalType === 'delete' && selectedItem && (
        <Modal
          title={config.modalDelete.title}
          body={config.modalDelete.body}
          confirmLabel={config.modalDelete.confirmLabel}
          confirmFn={() => handleDelete(selectedItem as User & Product)}
          cancelFn={setShowModal}
        />
      )}
    </div>
  );
};

export default GenericListPage;
