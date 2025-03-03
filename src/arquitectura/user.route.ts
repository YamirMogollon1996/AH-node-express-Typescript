import { Router } from "express";
import { controllador } from "./user.express.user"; 
const controlleruser = new controllador();
export const UserRouter = Router();
//detalle Reconocersosn!!!! ****

UserRouter.post("/postuser", controlleruser.CreateRepo);
UserRouter.get("/todosuser", controlleruser.getAlldatum);
UserRouter.delete("/deleteuser/:id" , controlleruser.eliminarusuario)    


