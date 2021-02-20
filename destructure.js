const person = {name: "Istiack Rohan", phone: "018*****936", friends:["Zawad", "Akash", "Porosh", "Faiaz"]};

const { name, phone} = person;
// const name = person.name;
// const phone = person.phone;

// console.log(name, phone);

// const friends = ["Zawad", "Akash", "Porosh", "Faiaz"];
// const [firstFriend, secondFriend, ...others] = friends;
// console.log(firstFriend, secondFriend, others);

const complexObject = {
    name : "Istiack",
    info : {
        Father: "Mr. Kurul Amin",
        Mother: "Nilima Afrose"
    }
}
const {Mother} = (complexObject.info);
console.log(Mother);