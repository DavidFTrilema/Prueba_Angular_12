import { Address } from './address';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: Address;
  phone: string;
  website: string;
  company: string;
}
