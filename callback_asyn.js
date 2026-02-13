function orderFood(callback){
    console.log("Ordering food....");

    setTimeout(function(){
        console.log("Food is ready");
        callback();
    },3000);
}

function eatFood(){
    console.log("Eating food... ");
}

orderFood(eatFood);