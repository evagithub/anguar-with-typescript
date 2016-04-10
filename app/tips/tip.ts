module app.domain{
    export interface ITip{
        //tipId: number;
        name: string;
        shortDescription: string;
        description: string;
        image: string;
        rating: number;
        //createDate: Date;        
    }
    
    export class Tip implements ITip{
        constructor(//public tipId: number,
                    public name: string,
                    public shortDescription: string,
                    public description: string,
                    public image: string,
                    public rating: number//,
                    //public createDate: Date
                    ) {                
        }
    }
}