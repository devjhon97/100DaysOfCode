<?php
    function rainTrapper($arr){
        $water = 0; $bucket = 0;

        for($ind = 0; $ind< count($arr); $ind++) {
            if($ind+1 === count($arr)){
                break;
            }
            $index = $ind+1;
            while ($arr[$ind] > $arr[$index]) {
                if($index+1 < count($arr)){
                    $index++;
                }else{
                    continue 2;
                }
            }
            
            $index--;
            $stkey = $index;

            while($index !== $ind){
                $bucket += $arr[$ind]-$arr[$index];     
                $index--;
            }
            $ind = $stkey;
        }
        return $bucket."\n";
    }


    echo rainTrapper([0,1,0,2,1,0,1,3,2,1,2,1]); 
    echo rainTrapper([4,2,0,3,2,5]);
?>