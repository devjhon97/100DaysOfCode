<?php
    function findingNemo(){
        $sentence = "já faz muito tempo que eu assisti procurando o Nemo, e até hoje eu não assisti procurando Dori";
        $words = preg_split('/[\s,]+/',$sentence);
        for($ind = 0; $ind < count($words);$ind++){
            if($words[$ind] == 'Nemo'){
                echo ('o Nemo foi encontrado na posição '.$ind+1);
                return;
            }
        }
        echo ('o Nemo não foi encontrado :(');
    }
    findingNemo();
?>