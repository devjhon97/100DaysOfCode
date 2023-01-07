<?php
    function IsPrime($currentNum){
        $index;
        if($currentNum > 1){
            $index = $currentNum-1; 
        }else{
            $index = $currentNum;
        }
        
        for($index;$index>1;$index--){
            if(is_integer($currentNum/$index)){
                break;
            }
        }

        if($index > 1){
            IsPrime($currentNum+1);
        }else{
            if($currentNum !== $GLOBALS['num']){
                echo $GLOBALS['num'].' não é primo, o número mais próximo primo é o '.$currentNum."\n";
            }else{
                echo $currentNum.' é primo.'."\n";
            }
        }
    }

    // 20 testes 
    for($ind = 1;$ind<=100;$ind++){
        $num = $ind;
        IsPrime($num);
    }
?>