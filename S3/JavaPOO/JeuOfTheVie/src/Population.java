import java.util.*;
import java.io.*;

class Population {

    List<Humain> pop;

    Population() {
        this.pop = new ArrayList<>();
    }

    public void vider() {
        this.pop.clear();
    }

    public void addHumain(Humain h) {
        this.pop.add(h);
    }

    public Humain getHumain(int index) {
        return this.pop.get(index);
    }

    public Humain removeHumain(Humain h) {
        this.pop.remove(h);
        return h;
    }

    public Humain removeHumain(int index) {
        Humain h = this.pop.get(index);
        this.pop.remove(index);
        return h;
    }

    public int taille() {
        return this.pop.size();
    }

    public void vieillir() {
        for( int i = pop.size()-1 ; i >= 0; i--){
            if (pop.get(i).isDead())
                pop.remove(i);
            else
                pop.get(i).vieillir();
        }
    }

    public void print() {
        System.out.println("Population de " + pop.size() + " humains {\n");
        for (Humain h : pop){
            h.print();
        }
    }
}