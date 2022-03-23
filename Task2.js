function getCount(string) {
   const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ю', 'я' , 'ы' ,'э'];
   let arrayChars = Array.from(string);
   const foundVowels = arrayChars.filter(char => vowels.includes(char));
   return foundVowels.length;
 }


let result = getCount('Пришла зима, запахло…');
console.log(`Количество гласных : ${result}`);
result = getCount('длинношеее');
console.log(`Количество гласных : ${result}`);