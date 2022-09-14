export const shorten = (title) =>  {
    const splited = title.split(" ");
    const newtitle = `${[splited[0]]} ${[splited[1]]}` ;
    return newtitle;
};

export const isInCart = (state , id) => {
    const result = !!state.selecteditems.find(item => item.id === id)
    return result;
}

export const quantity = (state , id) => {
    const indexI = state.selecteditems.findIndex(item => item.id === id)
    if (indexI === -1){
       return false;
    } else{
       return state.selecteditems[indexI].quantity;
    }
 
 }