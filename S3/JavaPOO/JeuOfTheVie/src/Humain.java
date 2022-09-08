import java.util.*;

public class Humain {

    protected static Random loto = new Random(Calendar.getInstance().getTimeInMillis());
    protected int age;
    protected int poids;
    protected String nom;
    protected int esperanceVie;

    Humain(String nom) {
        this.age = 0;
        this.poids = 3;
        this.nom = nom;
    }

    Humain(int age, int poids, String nom) {
        this.age = age;
        this.poids = poids;
        this.nom = nom;
    }

    void setNom(String nom) {
        this.nom = nom;
    }

    void setAge(int age) {
        this.age = age;
    }

    void setPoids(int poids) {
        this.poids = poids;
    }

    int getAge() {
        return age;
    }

    int getPoids() {
        return poids;
    }

    String getNom() {
        return nom;
    }

    protected void setEsperanceVie() {
        esperanceVie = 70;
    }

    public void vieillir() {
        age++;
    }

    public void grossir(int p) {
        poids += p;
    }

    public boolean isDead() {
        return age > esperanceVie;
    }

    public void print() {
        System.out.println("" +
                "Humain {\n" +
                        "Nom : " + nom + "\n" +
                        "Age : " + age + "\n" +
                        "Poids : " + poids + "\n" +
                "}");
    }
}
