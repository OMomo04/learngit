class Robot{
    //constructeur de mon robot
    constructor(abscisse, ordonnee, face){
        this.abscisse = abscisse;
        this.ordonnee = ordonnee;
        this.face = face;
    }

    //constructeur du robot 2 : 
    constructor(nom, vie, vitesse, position){
        this.nom = nom ; 
        vie = 1000 ;
        this.vitesse = vitesse ;
        this.position = position ;
    }
}