export class UserDominio {  
        public id: number;
        public name: string;
        public lastname: string;
        public year: number   ;  
        public estado :  boolean   
        constructor(     name :  string  , lastname :string  , year: number  , estado:boolean )  {
                    this.estado =  estado  
                    this.lastname= lastname  
                    this.year  = year  
                    this.id =  -1 , 
                    this.name = name


        }
        
}
