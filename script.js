let lang;
let namePerson;
// --------------Решение задачи через конструкцию IF---------------------------
lang = prompt('На каком языке тебе написать дни недели?  ru / en');
if (lang == 'ru'){
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота.');
} else {
    console.log('Sunday, monday, tuesday, wednesday, thursday, friday, saturday');
}
// --------------Решение задачи через switch-case------------------------------
lang = prompt('На каком языке тебе написать дни недели?  ru / en');
switch (lang) {
    case 'ru': 
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота.');
        break
    case 'en': 
        console.log('Sunday, monday, tuesday, wednesday, thursday, friday, saturday');
        break
};
// ------------Решение задачи через многомерный массив-----------------------
lang = prompt();
let langArray = {
    'ru': 'Понедельник, вторник, среда, четверг, пятница, суббота.', 
    'en': 'Sunday, monday, tuesday, wednesday, thursday, friday, saturday'
};
console.log(langArray[lang]);

namePerson = prompt('Введи имя: ');
namePerson == 'Артем' ? console.log('Директор') : namePerson == 'Максим' ? console.log('Преподаватель') : console.log('Cтудент');
// Задание 2