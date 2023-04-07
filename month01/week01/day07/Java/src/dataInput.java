import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class dataInput {
    ArrayList<Integer> input(){
        Scanner scanner = new Scanner(System.in);
        sortedMergedArray sma = new sortedMergedArray();
        String arr1 = null;
        String arr2 = null;
        ArrayList<Integer> nums1 = new ArrayList<>();
        ArrayList<Integer> nums2 = new ArrayList<>();
        Pattern pattern = Pattern.compile("\\d+");

        while(arr1 == null || arr2 == null) {
            if (arr1 == null) {
                System.out.print("Digite todos os números do primeiro array: ");
                arr1 = scanner.nextLine();
                Matcher matcher = pattern.matcher(arr1);
                while (matcher.find()) {
                    nums1.add(Integer.parseInt(matcher.group()));
                }
            } else {
                System.out.print("Digite todos os números do segundo array: ");
                arr2 = scanner.nextLine();
                Matcher matcher = pattern.matcher(arr2);
                while (matcher.find()) {
                    nums2.add(Integer.parseInt(matcher.group()));
                }
            }
        }

        return sma.mergingAndSorting(nums1, nums2);
    }
}
