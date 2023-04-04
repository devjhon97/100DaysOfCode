import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Progress progress = new Progress();

        System.out.println("Digite todos os valores em sequência que deseja adicionar: ");
        String sentence = scanner.nextLine();
        ArrayList<Integer> miles = filter(sentence);

        System.out.println(progress.progressDays(miles));
    }

    public static ArrayList<Integer> filter(String sentence){
        ArrayList<Integer> nums = new ArrayList<Integer>();

        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(sentence);

        while(matcher.find()){
            nums.add(Integer.parseInt(matcher.group()));
        }

        return nums;
    }
}