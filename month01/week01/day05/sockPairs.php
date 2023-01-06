<?php
    function pairs($string){
        $pair = 0;

        $array = str_split($string);
        sort($array);
        $string = implode("",$array);

        for($index = 0;$index < strlen($string); $index++){
            if(strlen($string)-$index === 1){
                break;
            }
            if($string[$index] === $string[$index+1]){
                $pair++;
                $index++;
            }
        }

        return 'There are '.$pair.' pairs'."\n";
    }

    echo pairs("AA"); // it should return 1
    echo pairs("ABABC"); // it should return 2
    echo pairs("CABBACCC"); // it should return 4
    echo pairs("ABEDEEDCCDBA"); // it should return 5
?>