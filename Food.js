class Food{
    construcor(){
        this.foodStock = 0;
        this.lastFed;

        this.image = loadImage("Images/Milk.png");
    }

    getFoodStock(){
        return this.foodStock
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock-1
        }
    }

    getFedTime(){
        this.lastFed = lastFed;
    }

    display(){

        if(lastFed >= 12){
            text("last feed:" + lastFed%12 + "PM",50,30);
        }

        else if(lastFed === 0){
            text("last feed: 12 AM",50,30);
        }

        else{
            text("last feed:"+ lastFed + "AM",50,30)
        }
        var x = 70, y = 100;

        imageMode(CENTER);
        //image(this.image,720,220,70,70);

     //if(this.foodStock !== 0){
         for(var i = 0; i<this.foodStock; i++){
             if(i%10 === 0){
                 x = 80;
                 y = y+50;
             }
             image(this.image,x,y,50,50);
             x = x+30;
         }
     //}
    }
}