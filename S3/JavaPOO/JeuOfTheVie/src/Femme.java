public class Femme extends Humain{
    private int fertilite;

    Femme(String nom) {
        super(nom);
        this.fertilite = 0;
    }

    Femme(int age, int poids, String nom, int fertilite) {
        super(age, poids, nom);
        this.fertilite = fertilite;
    }

    int getFertilite() {
        return fertilite;
    }

    public void vieillir() {
        age++;
        if (age == 15) fertilite = (Humain.loto.nextInt()+1)%100;
        if (age <= 20) poids = 3+(int)(2.6*age);
        else if (age >= 50) poids += (age % 2);
    }

    public Humain rencontre (Homme h) {
        if (this.age > 15 && this.age < 50 && h.age > 15){
            if (this.poids < 150 && h.poids < 150){
                int f = (Humain.loto.nextInt())%100;
                if (f < this.fertilite){
                    Humain enfant;
                    int p = (Humain.loto.nextInt())%100;
                    if (p < 50)
                        enfant = new Homme(this.nom + " "+ h.nom);
                    else
                        enfant = new Femme(this.nom + " "+ h.nom);
                    int g = (Humain.loto.nextInt())%20;
                    this.poids += 10;
                    h.poids += g;

                    return enfant;
                }
            }
        }
        return null;
    }

    protected void setEsperanceVie() {
        esperanceVie = 55 + (Humain.loto.nextInt())%35;
    }
}
