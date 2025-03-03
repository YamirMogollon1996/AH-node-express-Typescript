import { UserDominio } from "./user.domino";


export interface UserRepository {


    getall: () => Promise<UserDominio[]>;
    createauser: (UserDominio: UserDominio) => Promise<UserDominio>;   
    deleteuser :  (  id:string )  =>  Promise<void>  
    udpateUser : (  UserDom :  UserDominio )  => Promise<void>  
  

}
