<?php

    function barbecue(){
        $skewers = ['[--ooxx-oxxo-]','[--xooo-xxxo-]','[--xxxx-xxxx-]','[--oooo-oooo-]','[--oxxx-oxxx-]'];
        $isVegetarian = 0;
        $isNotVegetarian = 0;

        foreach($skewers as $value){
            foreach(str_split($value) as $word){
                if($word == 'x'){
                    $isNotVegetarian++;
                    break;
                }
            }
        }
        $isVegetarian = (count($skewers)-$isNotVegetarian);
        echo ('Tem '.$isVegetarian.' espetos vegetarianos, e '.$isNotVegetarian.' espetos não vegetarianos');
    }

    barbecue();
?>