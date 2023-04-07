import java.util.ArrayList;

public class sortedMergedArray {
    ArrayList<Integer> mergingAndSorting(ArrayList<Integer> nums1, ArrayList<Integer> nums2){
        ArrayList<Integer> finalList = new ArrayList<>();
        finalList.addAll(nums1);
        finalList.addAll(nums2);
        finalList.sort(null);

        return finalList;
    }
}
