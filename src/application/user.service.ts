import { UserDominio } from "../dominio/user.domino";
import { UserRepository } from "../dominio/user.repositiry"
// aca  son los servicos que vamos a  usar °°°°   
//  hola buenos dias  ******  --- Detalle ******** ----


export class  UserService  {  

            private repositori : UserRepository  
            constructor ( reposotiry : UserRepository ) { 
                this.repositori   =   reposotiry
            }
            public async createall  ( userdomino :  UserDominio)  {
                        return await this.repositori.createauser(  userdomino)
            }  
            public async getalldatum ()   : Promise<UserDominio[]>{
                            return this.repositori.getall()        
            } 
            public async deleteUserd (  id:string)    {
                        
                return this.repositori.deleteuser(  id )
            }
} 


