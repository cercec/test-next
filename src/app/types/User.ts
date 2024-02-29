export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userRole: string;
}

export type ProfileFormValues = Omit<User, '_id'>;
