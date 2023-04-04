import java.util.ArrayList;
public class nextPrime {
    String prime(int num){
        int inputNum = num;
        boolean isPrime = false;

        while(!isPrime){
            ArrayList<Integer> nums = new ArrayList<>();

            for(int i = 1; i <= num; i++){
                if(num%i == 0) nums.add(i);
            }

            if(nums.size() == 2) isPrime = true;
            else num++;
        }

        if(inputNum == num) return num+" é um número primo!";
        else return inputNum+" não é um número primo!\nO próximo primo é "+num+".";
    }
}
