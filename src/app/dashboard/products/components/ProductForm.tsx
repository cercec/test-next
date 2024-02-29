import React, { useCallback, useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Product } from '@/app/types/Product';
import { RenderField } from '@/app/components/RenderField';
import { validateProductFormValues } from '@/app/utils/formsValidation';
import { getAllUsers } from '@/app/utils/fetchers';
import { User } from '@/app/types/User';

interface EditProductFormProps {
  title: string;
  handleSubmit: (values: Product) => void;
  confirmText: string;
  handleClose: (show: boolean) => void;
  selectedItem?: Product;
}

const ProductForm = ({ title, handleSubmit, confirmText, handleClose, selectedItem }: EditProductFormProps) => {
  /* Vars */
  const currentUserId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRole');
  const [users, setUsers] = useState<User[]>([]);

  /* Functions */
  const fetchData = useCallback(async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  /* Effects */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5" id="modal-headline">
                  {title}
                </h3>
                <Form
                  onSubmit={handleSubmit}
                  initialValues={selectedItem}
                  validate={validateProductFormValues}
                  render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                      <Field name="userId" component={'input'} type="hidden" defaultValue={currentUserId} />
                      <Field name="title" component={RenderField} type="text" placeholder="Titre" />
                      <Field name="description" component={RenderField} type="text" placeholder="Description" />
                      <Field name="price" component={RenderField} type="number" placeholder="Prix" />
                      {userRole === 'admin' ? (
                        <Field name="owner" component="select" className="select select-bordered w-full" placeholder="Assigner à l'utilisateur">
                          <option value="">Sélectionner un utilisateur</option>
                          {users.map(user => (
                            <option key={user._id} value={user._id}>
                              {user.firstName} {user.lastName}
                            </option>
                          ))}
                        </Field>
                      ) : (
                        <Field name="owner" component={'input'} type="hidden" defaultValue={currentUserId} />
                      )}
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => handleClose(false)}
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Fermer
                        </button>
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          {confirmText}
                        </button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
