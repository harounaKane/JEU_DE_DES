export class De{

    NB_FACE:number = 6;
    valeur!:number

    constructor(){}

    getValeur():number{
        return this.valeur;
    }

    lancer():void{
        this.valeur = Math.floor( Math.random() * this.NB_FACE ) + 1;
    }


}