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


export class appA{
 
        public app : express.Application  
        public edad : number

        constructor(app :  Express.Application   ,edad:  number)  {
            this.app.use(express.urlencoded({extended:true}))
            this.app.use(express.json())
            this.edad =  edad
      }
      
      public asistente  ()  {
          console.log("cambios en la rama de Maria ")
          this.app.listen('9000',  () =>{
              console.log("corrinedo ene l puerto 9000")
          })

        
        
        }

        public Getalldata  ()  {
                if ( this.edad > 16 )  {
                      this.edad  =  199
                }
                return
        } 

        public ver_asistecna ()  {
              if ( this.edad > 1)  {
                    console.log("llevanod el proyecto !!!!!!!!!!!")
              }

        }
} 
