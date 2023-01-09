<?php
    function letters($num1,$num2){
        $letras = [null,null,['A','B','C'],['D','E','F'],['G','H','I'],['J','K','L'],['M','N','O'],['P','Q','R','S'],['T','U','V'],['W','X','Y','Z']];
        $letter1 = $letras[$num1];
        $letter2 = $letras[$num2];
        
        foreach ($letter1 as $key1 => $value1) {
            foreach ($letter2 as $key2 => $value2) {
                print_r($letter1[$key1].'-'.$letter2[$key2].'  ');
            }
        }
        echo "\n";
    }

    letters(2,9);
    letters(3,8);
    letters(4,7);
    letters(5,6);
?>