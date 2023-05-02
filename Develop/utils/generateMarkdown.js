// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      const MITbadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      return MITbadge;
    case 'Apache 2.0':
      const apacheBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      return apacheBadge;
    case 'GNU GPL v3':
      const GNUbadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      return GNUbadge;
    case 'none':
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case 'MIT':
      licenseLink = `Licensed under the [MIT License](https://opensource.org/licenses/MIT)`;
      return renderLicenseSection(license, licenseLink);
    case 'Apache 2.0':
      licenseLink = 'Licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
      return renderLicenseSection(license, licenseLink);
    case 'GNU GPL v3':
      licenseLink = `Licensed under the [GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)`;
      return renderLicenseSection(license, licenseLink);
    case 'none':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseLink) {
  return license === 'none' ? '' : `## License \n${licenseLink}`
}

//NOTE: if contributor has more than one, display them all:
function contributorLinks(contributorData) {
  let contributors = contributorData.split(",").map(contributor => contributor.trim());
  return contributors.length < 1 ? '' : '## Contributors and Questions \nIf you have questions, please visit our profiles:\n' + contributors.map(contributor => `[${contributor}](https://github.com/${contributor})`).join('\n');
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors-and-questions)
- [Test](#test)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

${contributorLinks(data.contributor)}

## Test
${data.test}

${renderLicenseLink(data.license)}

`
};

module.exports = generateMarkdown;





