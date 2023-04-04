import java.util.ArrayList;

public class Progress {
    int progressDays(ArrayList<Integer> days){
        int progress = 0;
        int value = 0;

        for(int i = 0; i < days.size(); i++){
            if(i == 0) value = days.get(i);
            else {
                if(days.get(i) > value) progress++;
                value = days.get(i);
            }
        }

        return progress;
    }
}
