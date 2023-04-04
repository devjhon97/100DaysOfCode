import java.util.ArrayList;
import java.util.Scanner;

import static java.lang.Thread.sleep;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        barbecueSkewers bs = new barbecueSkewers();
        ArrayList<String> skewers = new ArrayList<String>();
        int amount = 0;

        while(amount <= 0 || amount > 10){
            System.out.println("Quantos espetos estão na churrasqueira? ");
            amount = scanner.nextInt();
        }

        while(amount > 0){
            String skewer = "";
            String verifySkewer = "";

            try{
                System.out.println("Digite o "+(skewers.size()+1)+"° espeto.");
                Thread.sleep(150);
                skewer = scanner.next();
                verifySkewer = skewer.replaceAll("[-ox]", "");
            }catch (InterruptedException e){
                e.printStackTrace();
            }

            if(verifySkewer.length() == 0){
                skewers.add(skewer);
                amount--;
            }else System.out.println("Espeto inválido!");
        }

        System.out.println(bs.isVegetarian(skewers));
    }
}