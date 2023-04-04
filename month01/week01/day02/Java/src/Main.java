import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Nemo nemo = new Nemo();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite qualquer frase: ");
        String sentence = scanner.nextLine();
        System.out.println(nemo.findingNemo(sentence));
    }
}