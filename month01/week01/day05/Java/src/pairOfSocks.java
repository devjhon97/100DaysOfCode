import java.util.HashMap;
import java.util.Map;

public class pairOfSocks {
    int howManyPairsOfSocks(String socks){
        int pair = 0;
        HashMap<String, Integer> hs = new HashMap<>();

        for(int i = 0; i < socks.length(); i++){
            String letter = String.valueOf(socks.charAt(i));
            hs.computeIfPresent(letter, (key, value) -> value + 1);
            hs.putIfAbsent(letter, 1);
        }

        for(Map.Entry<String, Integer> entry: hs.entrySet()){
            pair += Math.floorDiv(entry.getValue(), 2);
        }

        return pair;
    }
}
