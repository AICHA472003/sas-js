let max= function Number(nb1,nb2,nb3){
    if(nb1>nb2){
        if(nb1>nb3){
        return nb1;} 

        else{
        return nb3;}}
    else{
        if(nb1>nb3){
        return nb2;}

        else{
        return nb3;
                     }
    }
 }
console.log( max(10,11,12));