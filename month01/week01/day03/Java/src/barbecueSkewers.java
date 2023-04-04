import java.util.ArrayList;
import java.util.Arrays;

public class barbecueSkewers {
    ArrayList<Integer> isVegetarian(ArrayList<String> skewers){
        ArrayList<Integer> types = new ArrayList<Integer>();
        int vegetarian = 0;
        int notVegetarian = 0;

        for(int i = 0; i < skewers.size(); i++){
            String skewer = skewers.get(i);

            if(skewer.contains("x")) notVegetarian++;
            else vegetarian++;
        }

        types.addAll(Arrays.asList(vegetarian, notVegetarian));
        return types;
    }
}
