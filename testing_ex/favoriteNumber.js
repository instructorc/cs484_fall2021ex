
//Favorite Number between 1 and 100
function getFavoriteNum(favNum){
    var enteredNum;
    if(favNum >= 1 && favNum <= 100 ){  

         enteredNum = favNum;
    }else{
        enteredNum = -1
    }

    return enteredNum;
}


module.exports = {getFavoriteNum};