console.log("welcome")

let myName='Mohammed';
let myNationality='Jordainian';
let myFavfrouit="Apple";
let myFavcolor="green";
let myFavcar='Toyota';
let userScore=0;

let userName=prompt('Welcome to my website. What is your name?')
alert( +  userName  + ' answer with yes or no ' );

let name =prompt(' My name is Mohammed ').toLowerCase() ;
console.log('name: ', name);

if (name === 'yes' || name ==='no'){
    alert('yes , my names Mohammed');
userScore+=1;
}else {
    alert('no, my name is Mohammed')
} 

let nationality=prompt(' my nationality is Jordanian ').toLowerCase();
if (nationality === 'yes' || nationality ==='y'){
    alert('yes');
userScore+=1;
}else {
    alert('no, my nationality is Jordanian');



} 



let Favfrouit=prompt(' my favorite frouit is Apple').toLowerCase();
if (Favfrouit  === 'yes' || Favfrouit ==='y'){
    alert('yes ,my favorite frouit is Apple' );
userScore+=1;
}else {
    alert('no, my favorite frouit is Apple')


} 



let favcolor =prompt(' my favorite color is green ').toLowerCase();
if (favcolor=== 'yes' || favcolor==='y'){
    alert('yes,my favorite color is green' );
userScore+=1;
}else {
    alert('no, my favorite color is green ')

    

} 




let favcar=prompt(' my favorite car is Toyota').toLowerCase();
if (favcar=== 'yes' || favcar==='y'){
    alert('yes , my favorite car is Toyota' );
userScore+=1;
}else {
    alert('no,  my favorite car is Toyota')

}
