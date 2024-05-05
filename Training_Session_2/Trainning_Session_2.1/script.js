// Problem: Write a program to implement a simple address book application.

// class AddressBook {
//     constructor(){
//         this.contactInformation = {}
//     }

//     add_contact(name, phonenumber, address, email){
//         if(this.contactInformation.hasOwnProperty(name)){
//             this.update_contact(name, phonenumber, address, email )
//             console.log("Contact Information already exists")
//         }
//         else{
//             this.contactInformation[name] = {
//                 phonenumber,
//                 address,
//                 email
//             }
//             // console.log( this.contactInformation[name] + " your addess is " + this.contactInformation[name].address)
//         }
//     }

//     update_contact(name, phonenumber, address, email){
//         if(this.contactInformation.hasOwnProperty(name)){
//             this.contactInformation[name] = {phonenumber, address, email}
//             const contactName = (Object.keys(this.contactInformation))
//             // console.log(contactName + " Your new contactinfo : " + "Address: " + this.contactInformation[name].address + ", Phone number: " + this.contactInformation[name].phonenumber)
//         }
//         else{
//             return console.log("Contact not found")
//         }
//     }

//     get_contact(name){
//         if(this.contactInformation.hasOwnProperty(name)){
//             const contactName = (Object.keys(this.contactInformation))
//             const contactInformation = (Object.values(this.contactInformation))
//         }
//         else{
//             return console.log("Contact not found")
//         }
//     }

//     delete_contact(name){
//         if(this.contactInformation.hasOwnProperty(name)){
//             delete this.contactInformation[name]
//             const contactInformation = (Object.values(this.contactInformation))
//             const contactName = (Object.keys(this.contactInformation))
//             console.log("contact info", contactInformation, contactName)
//         }
//         else{
//             return console.log("Contact not found")
//         }
//     }

// }

// let addressbook = new AddressBook()
// addressbook.add_contact("Pramod", "9861322471", "Pokh", "pramod@gmail.com");
// addressbook.delete_contact("Pramod")

//Problem: Find Most Frequently Repeating Number in a List

// function find_most_frequent(numbers){
//     const mappedList = new Map();
//     numbers.forEach(listElement =>{
//         if(mappedList.has(listElement)){
//             let max_frequency = mappedList.get(listElement);
//             mappedList.set(listElement, max_frequency += 1 )
//         }
//         else{
//             mappedList.set(listElement, 1 )
//         }
//     });

//     let maxFrequency = 0;
//     let mostFrequentNumbers = [];
//     mappedList.forEach((frequency, number) => {
//         if (frequency > maxFrequency) {
//             maxFrequency = frequency;
//             mostFrequentNumbers = [number];
//         } else if (frequency === maxFrequency) {
//             mostFrequentNumbers.push(number);
//         }
//     });
//     const randomIndex = Math.floor(Math.random() * mostFrequentNumbers.length);

//     return console.log("Most repetative number in list is: ", mostFrequentNumbers[randomIndex]);
// }

// const result = find_most_frequent([1, 2, 3, 2, 4, 2, 3, 4, 3]);

//Problem: Write a recursive program to flatten a nested dictionary. The dictionary can be nested to any levels.


// function flattenDictionary(dictionary) {
//     const flattened = {};
  
//     for (const [key, value] of Object.entries(dictionary)) {
//       for (const [innerKey, innerValue] of Object.entries(value)) {
//         const newKey = `${key}_${innerKey}`; 
//         flattened[newKey] = innerValue;
//       }
//     }
  
//     return flattened;
//   }
  
//   const cars = {
//     'mustang': {
//       'brand': 'Ford',
//       'model': 'Mustang',
//       'year': 1964
//     },
//     'i7': {
//       'brand': 'BMW',
//       'model': 'i7',
//       'year': 1965
//     },
//     'x': {
//       'brand': 'Tesla',
//       'model': 'X',
//       'year': 2020
//     }
//   };
  
//   const newCars = flattenDictionary(cars);  
//   console.log(newCars);