// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
  # ${data.title}

  ##Table of Contents
  - [Description] (##Description)
  - [Usage] (##Usage)
  - [Contribution] (##Contribution)
  - [Test] (##Test)
  - [Questions] (##Questions)
  - [License] (##License)

  ##Description
  ${data.description}

  ##Usage
  ${data.usage}

  ##Contribution
  ${data.contribution}

  ##Test
  ${data.test}

  ##Questions
  ${data.questions}
  // these two should need some formatting
  ${data.github}
  ${data.email}

  ##License
  ${data.license}
`;
}

export { generateMarkdown };
