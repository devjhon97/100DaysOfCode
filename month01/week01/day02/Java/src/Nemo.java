import java.util.ArrayList;
import java.util.Arrays;

public class Nemo {
    String findingNemo(String sentence){
        if(sentence.contains("Nemo")){
            String[] words = sentence.split(" ");
            ArrayList<String> arr = new ArrayList<String>(Arrays.asList(words));
            return "I found Nemo at "+(arr.indexOf("Nemo")+1);
        }else return "I can't find Nemo :( ";
    }
}
