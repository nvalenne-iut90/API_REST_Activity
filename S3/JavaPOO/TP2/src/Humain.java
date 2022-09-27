import java.util.*;

public class Humain implements Comparable<Humain>{

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

    boolean isHomme(){
        return false;
    }
    boolean isFemme(){
        return false;
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
                        "Esperance de vie : " + esperanceVie + "\n" +
                "}");
    }

    @Override
    public int compareTo(Humain humain) {
        if (this.age < humain.age){
            return -1;
        } else if (this.age == humain.age){
            return 0;
        } else {
            return 1;
        }
    }
    public static Comparator<Humain> ComparatorAge = new Comparator<Humain>() {
        @Override
        public int compare(Humain h1, Humain h2) {
            return h1.compareTo(h2);
        }
    };
}
