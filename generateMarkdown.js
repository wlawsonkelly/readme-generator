// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
    ${data.description}
## Installation
    ${data.instals}
## Usage
    ${data.usage}
## Contributing
    ${data.contribute}
## License
    ${data.license}

## Questions?
    Contact me @ ${data.email}
    Also follow me @ ${data.username}
  `
  }
  
  module.exports = generateMarkdown;