'use strict'

class Animal{
    constructor(qtnPatas){
        this.qtnPatas = 4;
    }
}

class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);

console.log(pug);

//getter e setter

class Person{
    #name = '';
    
}