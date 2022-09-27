import java.io.*;

public class Homme extends Humain {

    private int batifolage;

    Homme(String nom) {
        super(nom);
        this.batifolage = 0;
    }

    Homme(int age, int poids, String nom, int batifolage) {
        super(age, poids, nom);
        this.batifolage = batifolage;
    }

    @Override
    boolean isHomme() {
        return true;
    }

    public Humain rencontre (Femme f) {
        int b = (Humain.loto.nextInt(100));
        if (b > batifolage){
            if (f.age > 15 && f.age < 50 && this.age > 15){
                if (this.poids < 150 && f.poids < 150){
                    int c = (Humain.loto.nextInt(100));
                    if (c < f.getFertilite()){
                        Humain enfant;
                        int p = (Humain.loto.nextInt(100));
                        if (p < 50)
                            enfant = new Homme(this.nom + " " + f.nom);
                        else
                            enfant = new Femme(this.nom + " " + f.nom);
                        enfant.setEsperanceVie();
                        int g = -10 + (Humain.loto.nextInt(20));
                        grossir(g);
                        f.grossir(10);

                        return enfant;
                    }
                }
            }

        }
        return null;
    }

    public void vieillir() {
        age++;
        if (age > 15) batifolage = 70 + (Humain.loto.nextInt(30));
        if (age > 30) batifolage = 20 + (Humain.loto.nextInt(30));
        if (age > 60) batifolage = 50 + (Humain.loto.nextInt(50));
        if (age <= 20) poids = 3+(int)(3.6*age);
        else if (age >= 50) poids += (age % 2);
    }

    protected void setEsperanceVie() {
        esperanceVie = 50 + (Humain.loto.nextInt(30));
    }
}
