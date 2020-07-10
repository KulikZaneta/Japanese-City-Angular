/* tslint:disable */
import { Role } from './role';
export interface User {
  id?: number;
  password?: string;
  roles?: Array<Role>;
  username?: string;
}
