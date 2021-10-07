const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id)

        this.github = github
        
    }
role() {
    return "Engineer"

}
theGithub() {
    return this.github
}
}



modules.exports = Engineer