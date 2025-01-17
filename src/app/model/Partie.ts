import { Joueur } from "./Joueur";

export class Partie{

    public tour:number = 1;

    constructor(
        public j1:Joueur, 
        public j2:Joueur, 
        public VALEUR_A_ATTEINDRE:number = 20,
    ){}

    changerJoueur(joueur:Joueur):Joueur{
        return (joueur == this.j1) ? this.j2 : this.j1;
    }

    lancer(joueur:Joueur){
        joueur.lancer();
    }

    verifierGagnant(joueur:Joueur){
        return joueur.getScore() >= this.VALEUR_A_ATTEINDRE;
    }


}