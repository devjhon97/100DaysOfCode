let l0 = '+ - - - - - - - - - - - +\n';
let l1 = '|       . . 12 . .      |\n';
let l2 = '|     11           1    |\n';
let l3 = '|   10               2  |\n';
let l4 = '| .                   . |\n';
let l5 = '| .                   . |\n';
let l6 = '| 9         O         3 |\n';
let l7 = '| .                   . |\n';
let l8 = '| .                   . |\n';
let l9 = '|   8                4  |\n';
let lA = '|     7            5    |\n';
let lB = '|       . . 6 . .       |\n';

function att(){
    l0 = '+ - - - - - - - - - - - +\n';
    l1 = '|       . . 12 . .      |\n';
    l2 = '|     11           1    |\n';
    l3 = '|   10               2  |\n';
    l4 = '| .                   . |\n';
    l5 = '| .                   . |\n';
    l6 = '| 9         O         3 |\n';
    l7 = '| .                   . |\n';
    l8 = '| .                   . |\n';
    l9 = '|   8                4  |\n';
    lA = '|     7            5    |\n';
    lB = '|       . . 6 . .       |\n';
}

function drawClock(){
    console.log(l0+l1+l2+l3+l4+l5+l6+l7+l8+l9+lA+lB+l0);
}

function verifyMin(min){
    if(min >= 0 && min < 5){
        l3 = l3.substring(0, 12) + 'M' + l3.substring(13);
        l4 = l4.substring(0, 12) + 'M' + l4.substring(13);
        l5 = l5.substring(0, 12) + 'M' + l5.substring(13);
    };
    if(min >= 5 && min < 10){
        l3 = l3.substring(0, 18) + 'M' + l3.substring(19);
        l4 = l4.substring(0, 16) + 'M' + l4.substring(17);
        l5 = l5.substring(0, 14) + 'M' + l5.substring(15);
    };
    if(min >= 10 && min < 15){
        l4 = l4.substring(0, 19) + 'M' + l4.substring(20);
        l5 = l5.substring(0, 17) + 'M' + l5.substring(18);
        l6 = l6.substring(0, 15) + 'M' + l6.substring(16);
    };
    if(min >= 15 && min < 20){
        l6 = l6.substring(0, 15) + 'M M M' + l6.substring(20);
    };
    if(min >= 20 && min < 25){
        l6 = l6.substring(0, 15) + 'M' + l6.substring(16);
        l7 = l7.substring(0, 17) + 'M' + l7.substring(18);
        l8 = l8.substring(0, 19) + 'M' + l8.substring(20);
    };
    if(min >= 25 && min < 30){
        l7 = l7.substring(0, 14) + 'M' + l7.substring(15);
        l8 = l8.substring(0, 16) + 'M' + l8.substring(17);
        l9 = l9.substring(0, 18) + 'M' + l9.substring(19);
    };
    if(min >= 30 && min < 35){
        l7 = l7.substring(0, 12) + 'M' + l7.substring(13);
        l8 = l8.substring(0, 12) + 'M' + l8.substring(13);
        l9 = l9.substring(0, 12) + 'M' + l9.substring(13);
    };
    if(min >= 35 && min < 40){
        l7 = l7.substring(0, 10) + 'M' + l7.substring(11);
        l8 = l8.substring(0, 9) + 'M' + l8.substring(10);
        l9 = l9.substring(0, 8) + 'M' + l9.substring(9);
    };
    if(min >= 40 && min < 45){
        l6 = l6.substring(0, 10) + 'M' + l6.substring(11);
        l7 = l7.substring(0, 8) + 'M' + l7.substring(9);
        l8 = l8.substring(0, 6) + 'M' + l8.substring(7);
    };
    if(min >= 45 && min < 50){
        l6 = l6.substring(0, 6) + 'M M M O'+ l6.substring(13);
    };
    if(min >= 50 && min < 55){
        l4 = l4.substring(0, 6) + 'M' + l4.substring(7);
        l5 = l5.substring(0, 8) + 'M' + l5.substring(9);
        l6 = l6.substring(0, 10) + 'M' + l6.substring(11);
    };
    if(min >= 55){
        l5 = l5.substring(0, 10) + 'M' + l5.substring(11);
        l4 = l4.substring(0, 9) + 'M' + l4.substring(10);
        l3 = l3.substring(0, 8) + 'M' + l3.substring(9);
    };
}

function verifyHour(hour){
    if(hour === 0 || hour === 12){
        l4 = l4.substring(0, 12) + 'H' + l4.substring(13);
        l5 = l5.substring(0, 12) + 'H' + l5.substring(13);
    };
    if(hour === 1 || hour === 13){
        l4 = l4.substring(0, 16) + 'H' + l4.substring(17);
        l5 = l5.substring(0, 14) + 'H' + l5.substring(15);
    };
    if(hour === 2 || hour === 14){
        l5 = l5.substring(0, 17) + 'H' + l5.substring(18);
        l6 = l6.substring(0, 15) + 'H' + l6.substring(16);
    };
    if(hour === 3 || hour === 15){
        l6 = l6.substring(0, 15) + 'H H ' + l6.substring(19);
    };
    if(hour === 4 || hour === 16){
        l6 = l6.substring(0, 15) + 'H' + l6.substring(16);
        l7 = l7.substring(0, 17) + 'H' + l7.substring(18);
    };
    if(hour === 5 || hour === 17){
        l7 = l7.substring(0, 14) + 'H' + l7.substring(15);
        l8 = l8.substring(0, 16) + 'H' + l8.substring(17);
    };
    if(hour === 6 || hour === 18){
        l7 = l7.substring(0, 12) + 'H' + l7.substring(13);
        l8 = l8.substring(0, 12) + 'H' + l8.substring(13);
    };
    if(hour === 7 || hour === 19){
        l7 = l7.substring(0, 10) + 'H' + l7.substring(11);
        l8 = l8.substring(0, 9) + 'H' + l8.substring(10);
    };
    if(hour === 8 || hour === 20){
        l6 = l6.substring(0, 10) + 'H' + l6.substring(11);
        l7 = l7.substring(0, 8) + 'H' + l7.substring(9);
    };
    if(hour === 9 || hour === 21){
        l6 = l6.substring(0, 6) + ' H H O'+ l6.substring(12);
    };
    if(hour === 10 || hour === 22){
        l5 = l5.substring(0, 8) + 'H' + l5.substring(9);
        l6 = l6.substring(0, 10) + 'H' + l6.substring(11);
    };
    if(hour === 11 || hour === 23){
        l4 = l4.substring(0, 9) + 'H' + l4.substring(10);
        l5 = l5.substring(0, 10) + 'H' + l5.substring(11);
    };
}

function verifyTime(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    
    console.log(`${hour}:${min}`);
    att();
    verifyMin(min);
    verifyHour(hour);
    drawClock();
}

setInterval(()=> {
    console.clear();
    verifyTime();
}, 1000);
