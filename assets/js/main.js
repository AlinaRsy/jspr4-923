"use strict";
// ЦИКЛЫ
// while(условие){ //true false
//     тело цикла
// }
// let i = 1;
// while(i<=3){
//     alert(i);
//     i++;
// }
//  0 '' false
//  1 2 3 'oekdne' true

// let i = 3;
// while(i){ //0 = false
//     alert(i);
//     i--;
// }

// do{
//     тело цикла
// }while(условие);

// let i = 5;
// do{
//     alert(i);
//     i++;
// }while(i<=3);

// for(начальное знач; условие; шаг){ // начало => условие => тело => шаг
//     тело цикла
// }
// for(let i = 1; i<=3; i++){
//     alert(i);
// }

// let sum = 0;

// while (true) {
//   let num = +prompt("Введите число");
//   if (!num) break;
//   sum += num;
//   //sum = sum+num;
// }
// alert(`Сумма равна ${sum}`);
// showMessage('Hello');

// // ФУНКЦИИ
// function showMessage(message){
//     alert(message)
// }
// showMessage('привет');
// showMessage('пока');

// let message = 'Внешняя'
// function showMessage(){
//     alert(message);
// }
// showMessage();

// function getMessage(author, text="Пустое сообщение"){
//     alert(`${author}: ${text}`)
// }
// getMessage('Мария', 'Привет как дела')
// getMessage('Павел', 'Привет нормально')
// getMessage('Никита')
// alert(sum(6,6));
// function sum(num1, num2){
//     return num1+num2;
// }
// alert(sum(4,6));

// let result1 = sum(100, 50);
// let result2 = sum(60, 60);

// alert(result1-result2)

// let sum = function(num1, num2){
//     return num1+num2;
// }
// sum(3,3);

// let sum = (num1, num2) => num1+num2;
// sum(4,7);

// let sum = (num1, num2) => {
//     let result = num1+num2;
//     return result;
// }
