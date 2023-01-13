<?php
    function binaryTree($num){
        if ($num <= 1) return 1;
        $res = 0;
        for($index = 1 ;$index <= $num ; $index++){
            $res += binaryTree($index - 1) * binaryTree($num - $index);
        }
        return $res."\n";
    }

    echo binaryTree(3);
    echo binaryTree(4);
    echo binaryTree(5);
?>