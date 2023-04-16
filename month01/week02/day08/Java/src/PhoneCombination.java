import java.util.ArrayList;
import java.util.Arrays;

public class PhoneCombination {
    ArrayList<String> allCombinations(String digits){
        ArrayList<String> keys = new ArrayList<>(Arrays.asList("abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"));
        ArrayList<String> combinations = new ArrayList<>();
        ArrayList<String> output = new ArrayList<>();

        for(int i = 0; i < digits.length(); i++){
            String letter = String.valueOf(digits.charAt(i));
            int key = Integer.parseInt(letter)-2;

            if(!combinations.contains(keys.get(key))) combinations.add(keys.get(key));
        }
        String allLetters = null;

        for(int i = 0; i < combinations.size(); i++){
            String thisLetters = combinations.get(i);
            allLetters = allLetters != null ? allLetters + thisLetters : thisLetters;
        }

        for(int i = 0; i < allLetters.length(); i++){
            String char1 = String.valueOf(allLetters.charAt(i));

            for(int l = i+1; l < allLetters.length(); l++){
                String char2 = String.valueOf(allLetters.charAt(l));

                output.add(char1+char2);
            }
        }

        return output;
    }
}
