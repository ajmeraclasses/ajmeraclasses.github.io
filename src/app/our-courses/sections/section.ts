export class Section{
    title!:string;
    desc!:string;
    classdesc!:Class[];
    anchor!:string;
    tabs!:string[];
}

export class Class{
    // exam?:string;
    grade?:number | string;
    description!:string;
    wsLink?:string | undefined;
}