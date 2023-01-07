<?php
    function merge($num1,$num2){
       $num1 = array_filter($num1, function($value){
            return $value !== 0;
       });

       $num1 = array_merge($num1,$num2);
       array_multisort($num1);

       return $num1;
    }

    print_r (merge([1,2,3,0,0,0],[2,5,6]));
?>