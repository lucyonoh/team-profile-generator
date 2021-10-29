const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)

        this.school = school
        
    }
role() {
    return "Intern"

}
theSchool() {
    return this.school
}
}



module.exports = Intern