import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        calcAge calc = new calcAge();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Quantos anos você tem? ");
        int age = scanner.nextInt();
        System.out.println(calc.calculateAge(age));
    }
}