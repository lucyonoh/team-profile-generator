const Managers = require("./Constructors/Managers")
const Intern = require("./Constructors/Intern")
const Engineer = require("./Constructors/Engineer")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const render = require("./src/page-template.js")


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
    function addEngineer (){
    inquirer.prompt ([{

        type:"input",
        name:"engineerName",
        message:"What is the name of the Engineer?",
    }, {
        type:"input",
        name:"email",
        message:"What is your email?",
    }, {
        type:"input",
        name:"github",
        message: "What is your gitHub username?",
    }, {
        type:"input",
        name:"employeeid",
        message:"What is your employee id?"
    

    }])    
        .then((answers)=> {
            const response = new Engineer (answers.engineerName,  answers.employeeid, answers.github, answers.email)


            team.push (response)
             teamDetails ()
        })

    }

    function addIntern (){
        inquirer.prompt ([{
    
            type:"input",
            name:"internName",
            message:"What is the name of the Intern?",
        }, 
        {type:"input",
            name:"email",
            message:"What is your email?"}
    
            ,{type:"input",
            name:"github",
            message: "What is the name of your school?"}
    
           , {type:"input",
            name:"employeeid",
            message:"What is your employee id?"
    
    
        }])    
            .then((answers)=> {
                const response = new Intern (answers.school, answers.employeeid, answers.internName, answers.email)
    
    
                team.push (response)
                 teamDetails ()
            }) }

         function teamBuild () {
             if (!fs.existsSync(OUTPUT_DIR)) {
                 fs.mkdirSync(OUTPUT_DIR)
             }
             fs.writeFileSync(outputPath,render(team),"utf-8")
         }  

    teamManager ()
}

main ()