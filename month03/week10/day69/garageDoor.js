function garageDoor(commands){
    let state = 'CLOSED!';
    let log = 'Door: '+state+'\n';

    for(let command of commands){
        
        switch (command) {
            case 'button_clicked':
                log += '> Button clicked!'+'\n';
                if(state === 'CLOSED!'){
                    state = 'OPENING...';
                    log += 'Door: '+state+'\n';
                }else if(state === 'OPENING...'){
                    state = 'STOPPED WHILE OPENING!';
                    log += state+'\n';
                }else if(state === 'OPEN!'){
                    state = 'CLOSING...';
                    log += 'Door: '+state+'\n';
                }else if(state === 'CLOSING...'){
                    state = 'STOPPED WHILE CLOSING!';
                    log += state+'\n';
                }else if(state === 'STOPPED WHILE CLOSING!'){
                    state = 'OPENING...';
                    log += 'Door: '+state+'\n';
                }else if(state === 'STOPPED WHILE OPENING!'){
                    state = 'CLOSING...';
                    log += 'Door: '+state+'\n';
                }
                break;

            case 'cycle_complete':
                if(state === 'OPENING...'){
                    state = 'OPEN!';
                    log += '> Cycle complete.\nDoor: '+state+'\n';
                }else{
                    state = 'CLOSED!';
                    log += '> Cycle complete.\nDoor: '+state+'\n';
                }
                break;
        }
    }

    return log;
}

console.log(garageDoor(['button_clicked', 'cycle_complete', 'button_clicked', 'button_clicked', 'button_clicked', 'button_clicked', 'button_clicked', 'cycle_complete']));