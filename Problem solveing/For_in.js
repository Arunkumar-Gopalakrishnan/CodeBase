const dummyObject = {
    name: "John Doe",
    age: 30,
    profession: "Software Developer",
    isActive: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    },
    getDetails: function() {
      return `${this.name}, a ${this.profession}, is ${this.age} years old.`;
    }
  };
  

for(key in dummyObject)
{
    console.log(key);
    (typeof dummyObject[key] === 'function') ? console.log(dummyObject[key]()) :  console.log(dummyObject[key]); 
    
}