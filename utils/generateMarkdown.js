// TODO: Create a function that returns a license badge based on which license is passed in, if there is no license, return an empty string

// NOTE TO SELF (add into notes later, remove this comment before final submission of project):
// the URL format for licence badges is: https://img.shields.io/badge/{label}-{message}-{color}.svg

function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license.replace(" ", "%20")}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
