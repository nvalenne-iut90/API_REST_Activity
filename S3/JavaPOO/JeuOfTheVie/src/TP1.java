
public class TP1 {
    public static void main(String[] args) {
        final int NB_TOURS_JEU = Integer.parseInt(args[0]);
        final int TAILLE_INIT = Integer.parseInt(args[1]);

        Population population;
        Humain h1, h2, bebe;
        Homme ho;
        Femme fe;


        population = new Population();

        /*
            Génération de la population en fonction de la taillle d'initialisation
         */
        for (int i = 1; i <= TAILLE_INIT; i++){
            if (i <= TAILLE_INIT/2){
                population.addHumain(
                        new Homme(20,70,"Homme" + i,(70 + (Humain.loto.nextInt())%30))
                );
            } else {
                population.addHumain(
                        new Femme(20,55,"Femme" + (i - TAILLE_INIT/2),(1 + Humain.loto.nextInt()%100))
                );
            }

        }
        // Affichage population
        population.print();


        for (int tour = 1; tour <= NB_TOURS_JEU; tour++){
            int n = (Humain.loto.nextInt()) % (population.taille()/2);
            for (int rencontre = 0; rencontre < n; rencontre++) {

                int i1 = (Humain.loto.nextInt()) % (population.taille() - 1);
                int i2 = (Humain.loto.nextInt()) % (population.taille() - 1);
                System.out.println(i1 + " " + i2);
                /*
                h1 = population.getHumain(i1);
                h2 = population.getHumain(i2);
                if (h1 instanceof Homme && h2 instanceof Femme) {
                    ho = (Homme) h1;
                    fe = (Femme) h2;
                    bebe = ho.rencontre(fe);
                } else if (h1 instanceof Femme && h2 instanceof Homme) {
                    fe = (Femme) h1;
                    ho = (Homme) h2;
                    bebe = fe.rencontre(ho);
                }
                else
                    break;

                if (bebe != null){
                    population.addHumain(bebe);
                    System.out.println("Un nouveau est arrivé !! Il s'appelle " + bebe.getNom());
                }

                 */
            }
        }

    }
}
