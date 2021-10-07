class Employee {
  constructor(name, email, id) {
    this.name = name
    this.id = id
    this.email = email


    // TODO: Add code here
  } 

  names() {
    return this.name 
  }

  ids() {
    return this.id
  }
  
  emails() {
    return this.email
  }

  role() {
    return "employee"
  }
}

module.exports = Employee

