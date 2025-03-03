import { Request, Response } from "express";
import { UserService } from "../application/user.service";
import { MysqlCreateUser } from "./user.Repososiorio";
import {sign} from "jsonwebtoken"
let mysqlUseRepository = new MysqlCreateUser();
let servicio = new UserService(mysqlUseRepository);


export class controllador {
  public async CreateRepo(req: Request, res: Response): Promise<any> {  
    try {   

        console.log("la body es de "   +   req.body)
      const EncryptaData =  await  sign(req.body  , 'Algorithmy33' )
      let datos = await servicio.createall(req.body);
      console.log(datos)
      
      return res.send({ msg: "Creado" , EncryptaData  });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        return res.send({
          message: error.message,
          name: error.name,
        });
      }
    }
  }

  public async getAlldatum(req: Request, res: Response): Promise<any> {
    try {
      let datos = await servicio.getalldatum();
      console.log(datos);
      console.log("mogolllon");
      return res.send(datos);
    } catch (error) {
      if (error instanceof Error) {
        return res.send({
          message: error.message,
          name: error.name,
        });
      }
    }
  }

  public async eliminarusuario(req: Request, res: Response): Promise<any> {
    // console.log(req.params)
    try {
      await servicio.deleteUserd(req.params.id);
      return res.send({ msg: "se elimino el usuario" });
    } catch (error) {
      return res.send(error);
    }
  }

  public async ChangueReposApi(req: Request, res: Response) {
    console.log(req.body);
  }
}
