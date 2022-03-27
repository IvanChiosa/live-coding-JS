

function iDoSame(){
    console.log("Hallo");
}
iDoSame();


let num =null;
console.log(typeof num);



sum(2,3);
sum(5,6);

function sum(a,b) {
    console.log(a+b);
}

function meinName(age,name,Ort){
    console.log("Ich bin Ivan", age, name, "und ich Wohne in", Ort);
    console.log(`Meine age ist ${age} und mein Name ist: ${name} und ich Wohne in ${Ort}`);
}

meinName(36,"Ivan","Köln")


let myName = "ivaN";
myName = myName[0].toUpperCase() + myName.substring(1).toLocaleLowerCase();
console.log(myName.length);
console.log(myName);