import express from "express";
import { UserRouter } from "./arquitectura/user.route";
const app = express();  
import cors from "cors";
import { Detalle_Boleta } from "./Protected";


// Midelwares and DetailsCenter !!!!!  
app.use(express.json());
app.use(UserRouter);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.listen(process.env.PUERTO, () => {

  console.log("mogollon osorio yamir lorenzo  "  +  process.env.PUERTO);  
  try {

  } catch (error) {
      if( error instanceof Error)  {
            console.log({
              message: error.message , 
              name : error.stack  ,
              local :  error.stack
            })
      }
  }

});


export class app{

        public app :   Express.Application ; 
        public router = express.Router()  

        constructor(app :  Express.Application  )  {
                this.app =  app 
              
           
      } 
      public GetListen  (){
            this.router.get("/Inicialziar losa datos Ajadan  Ya tu Sabes !!!!")
      } 
      
       
} 
