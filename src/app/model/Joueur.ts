import { Goblet } from "./Goblet";

export class Joueur{

    score:number = 0;
    goblet:Goblet = new Goblet();
    
    constructor(public nom:string){}

    lancer():void{
        this.goblet.lancer();
        this.score += this.goblet.getScoreDes();
    }

    getScore():number{
        return this.score;
    }
}