const Managers = require("./Constructors/Managers")
const Intern = require("./Constructors/Intern")
const Engineer = require("./Constructors/Engineer")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const Choice = require("inquirer/lib/objects/choice")


const team =[]

function main () {
    
    function teamManager () {
inquirer.prompt([{
    type: "input",
    name: "managerName",
    message: "What is the managers name?"



},
{
    type:"input",
    name: "employeeid",
    message: "What is the employyee id number?"
},
{
    type:"input",
    name:"email",
    message:"What is your email address?"
},
{
    type:"input",
    name:"officeNumber",
    message:"What is your officeNumber?"
},
]) .then((answers)=> {
    const response = new Managers(answers.managerName,  answers.employeeid, answers.officeNumber, answers.email)

    team.push(response)
    teamDetails ()
})
    }

    function teamDetails() {
        inquirer.prompt ([{

            type:"list",
            name:"teamChoice",
            message:"Would you like to add another team member?",
            choices:["Engineer", "Intern", "NONE"]
        }])

        .then((choices)=> {
        switch(choices.teamChoice) {
            case "Engineer":
                addEngineer () 
                break;
            case  "Intern":
                addIntern () 
                  break;

             default: 
              teamBuild ()
              
        }
        })


        
    }
}

