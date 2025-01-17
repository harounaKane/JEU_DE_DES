import { Component } from '@angular/core';
import { Partie } from '../model/Partie';
import { Joueur } from '../model/Joueur';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  joueur_1:string = "Toto"
  joueur_2:string = "Tata"

  score_joueur_1:number = 0
  score_joueur_2:number = 0

  score_de_j1:number = 0
  score_de_j2:number = 0

  valeur_de:number = 0

  tour:number = 1
  VALEUR_A_ATTEINDRE:number = 20

  partie!:Partie
  j1:Joueur = new Joueur(this.joueur_1)
  j2:Joueur = new Joueur(this.joueur_2)

  jtp!:Joueur
  aGanger:boolean=false;

  constructor() {
    console.log( Math.floor( Math.random() * 6 + 1 ) );
    this.partie = new Partie(this.j1, this.j2, this.VALEUR_A_ATTEINDRE)

    this.jtp = this.partie.j1
  }

  lancer(){

    this.partie.lancer(this.jtp);
    
    if( this.partie.j1 == this.jtp ){
      this.score_joueur_1 = this.partie.j1.getScore();
      this.score_de_j1 = this.j1.goblet.getScoreDes()
    }else{
      this.score_joueur_2 = this.partie.j2.getScore();
      this.score_de_j2 = this.j2.goblet.getScoreDes()

      this.tour = ++this.partie.tour

      this.aGanger = this.partie.verifierGagnant(this.j1) && this.j1.getScore() >= this.j2.getScore();

      if( this.aGanger ) {
        console.log("j1 a gan");  
        this.jtp = this.j1;        
        return;
      }else if(this.partie.verifierGagnant(this.j2) && this.j1.getScore() < this.j2.getScore()){
        this.aGanger = true;
        this.jtp = this.j2;        
        return
      }

    }
    
    this.jtp = this.partie.changerJoueur(this.jtp);

  }

}
