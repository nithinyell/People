// Model for Person

class Person {
    constructor(name, email, emailType, phoneNumbers) {
      this.name = name;
      this.email = email;
      this.emailType = emailType;
      this.phoneNumbers = phoneNumbers || [];
    }
  }
  
  export default Person;
  