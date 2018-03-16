function abbrevName(name){

    let newName = name.split(' ');
    return `${newName[0].charAt(0).toUpperCase()}.${newName[1].charAt(0).toUpperCase()}`;
    
    };