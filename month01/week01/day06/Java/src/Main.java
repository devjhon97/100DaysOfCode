import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        nextPrime np = new nextPrime();

        System.out.print("Digite um número: ");
        int num = scanner.nextInt();

        System.out.println(np.prime(num));
    }
}