import { De } from './De';
export class Goblet{

    d1:De = new De(); 
    d2:De = new De();

    constructor(){}

    lancer():void{
        this.d1.lancer();
        this.d2.lancer();
    }

    getScoreD1():number{
        return this.d1.getValeur();
    }

    getScoreD2():number{
        return this.d2.getValeur();
    }
    
    getScoreDes():number{
        return this.d1.getValeur() + this.d2.getValeur();
    }
}