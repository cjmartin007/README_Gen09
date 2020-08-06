const inquirer = require("inquirer");

inquirer
.prompt(
    {
       type: "input",
       name: "README",
       message: "Title of this Document?"
    
  },
  {
    type: "input",
    Headline: "",
    message: "Title of this Document?"
 
},
{
        type: "checkbox",
    message: "What would you like in your README.md?",
    choices: [
        "## Intro",
        "## User Story",
        "## Installation",
        "## Usage",
        "## License",
        "## Contributing",
        "## Tests",
        "## Questions"
    ]
  },

   {     type: "input",
    message: "introduction",
    name: "enter_introduction"
  },

  {
        type: 'input',
    message: 'what is your last name', 
    name: 'lastName'
})

.then(function(data) {
    
    const filename = data.name.replace("<br>", '') + ".md";
                    
    fs.writeFile(filename, JSON.stringify(data, null, '/t'),
    
    function(err) {

        if (err) {
    
            console.log(err);
        }
    });

});
