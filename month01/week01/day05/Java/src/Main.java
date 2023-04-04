import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        pairOfSocks pos = new pairOfSocks();

        System.out.println("Digite as inicias dos pares de meias");
        String socks = scanner.next();
        System.out.println(pos.howManyPairsOfSocks(socks.toUpperCase()));
    }
}