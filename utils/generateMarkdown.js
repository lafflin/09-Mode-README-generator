// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license !== "None") {
		return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
	} else {
		return "";
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license !== "None") {
		return `- [License](#License)`;
	} else {
		return "";
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license !== "None") {
		return `## License 

    This project is licensed by the ${license} license.
    `;
	} else {
		return;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#Description)
  - [Usage](#Usage)
   ${renderLicenseLink(data.license)}
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)

  ## Description
  ${data.description}
 
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
 

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, feel free to contact the creator at:
  [${data.github}](https://github.com/${data.github})
  or
  ${data.email}
`;
}

module.exports = generateMarkdown;
