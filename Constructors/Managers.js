const Employee = require("./Employee");

class Managers extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id)

        this.officeNumber = officeNumber
        
    }
role() {
    return "Managers"

}
theOfficeNumber() {
    return this.officeNumber 
}
}



modules.exports = Managers