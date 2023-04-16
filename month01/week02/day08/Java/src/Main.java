import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PhoneCombination PC = new PhoneCombination();
        int digits = 0;

        System.out.println("Digite números correspondente as teclas: ");
        digits = scanner.nextInt();

        String dig = String.valueOf(digits);

        System.out.println(PC.allCombinations(dig));
    }
}