import React from 'react';
import { Form, Field } from 'react-final-form';
import { User } from '@/app/types/User';
import { validateProfileFormValues } from '@/app/utils/formsValidation';
import { RenderField } from '@/app/components/RenderField';

interface EditProfileFormProps {
  title: string;
  handleSubmit: (values: User) => void;
  confirmText: string;
  handleClose: (show: boolean) => void;
  mode?: 'add' | 'edit';
  selectedItem?: User;
}

const ProfileForm = ({ title, handleSubmit, confirmText, handleClose, mode, selectedItem }: EditProfileFormProps) => {
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
                  validate={validateProfileFormValues}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                      <Field name="firstName" component={RenderField} type="text" placeholder="Prénom" />
                      <Field name="lastName" component={RenderField} type="text" placeholder="Nom" />
                      <Field name="email" component={RenderField} type="email" placeholder="Email" />
                      {mode === 'add' && <Field name="password" component={RenderField} type="password" placeholder="Mot de passe" />}
                      <Field name="userRole" component="select" placeholder="Rôle" className="select select-bordered w-full mb-4">
                        <option disabled value="">
                          Sélectionnez votre rôle
                        </option>
                        <option value="user">Utilisateur</option>
                        <option value="admin">Admin</option>
                      </Field>

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

export default ProfileForm;
