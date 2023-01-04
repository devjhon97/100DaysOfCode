<?php
    $test = [[3,4,1,2],[10,11,12,9,10],[6,5,4,3,2,9],[9,9]];

    function wasDayProgressed($num){
        $progress = 0;
        for($index = 1;$index < count($num);$index++){
            if($num[$index] > $num[$index-1]){
                $progress++;
            }
        }
        return $progress;
    }

    for($ind = 0;$ind < 4; $ind++){
        echo ('Houve '.wasDayProgressed($test[$ind]).' Progressões. <br>');
    }
?>
