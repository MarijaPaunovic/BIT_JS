function Aplication(name, url, licence, stars){
    this.name = name;
    this.url = url;
    this.licence = licence;
    this.stars = stars;
}
Aplication.prototype.getData = function(){
    return "Name " + this.name + " url " + this.url + " licence " + this.licence + " stars " + this.stars;
}
Aplication.prototype.isCCLicence = function(){
    return this.licence === "CC";
}
Aplication.prototype.like = function(){
    this.stars++;
}
Aplication.prototype.showStar = function(){
    return this.stars;
}


function WebApp (name, url, technologies, licence, stars) {
    Aplication.call(this,name, url, licence, stars);
    this.technologies = technologies;
    
};
WebApp.prototype = Object.create(Aplication.prototype);
WebApp.prototype.constructor = WebApp;
WebApp.prototype.reactBased = function(){
    return this.technologies === "React";
}   


function MobileApp (name, url,platforms, licence, stars) {
    Aplication.call(this,name, url, licence, stars);
    this.platforms = platforms;
};
MobileApp.prototype = Object.create(Aplication.prototype);
MobileApp.prototype.constructor = MobileApp.prototype;
MobileApp.prototype.forAndroid = function(){
    return this.platforms === "Android";
}
var foodball = new Aplication("football","http://foodball.com","CC",5)
var foodballWeb = new WebApp("footballWeb","http://foodball.com","React","CC",5);
var foodballMobile = new MobileApp("fodballMob","http://foodball.com","Android","BC",3);
// console.log(foodball.getData());
// console.log(foodball.like());
// console.log(foodball.showStar());
// console.log(foodballWeb.getData());
// console.log(foodballWeb.reactBased());
// console.log(foodballWeb.like());
// console.log(foodballWeb.showStar());
// console.log(foodballWeb.isCCLicence());
// console.log(foodballMobile.getData());
// console.log(foodballMobile.forAndroid());
// console.log(foodballMobile.like());
// console.log(foodballMobile.showStar());
// console.log(foodballMobile.isCCLicence());
