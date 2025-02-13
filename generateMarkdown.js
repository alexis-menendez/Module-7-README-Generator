// generate license badge
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license.replace(" ", "%20")}-blue.svg)`;
}

// generate license link
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }

  const licenseLinks = {
    "MIT": "https://opensource.org/licenses/MIT",
    "GPLv3": "https://www.gnu.org/licenses/gpl-3.0",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause"
  };

  return `[${license} License](${licenseLinks[license]})`;
}

// generate liicense section
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License

This project is licensed under the ${renderLicenseLink(license)}.`;
}

// generate README markdown
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${data.license !== "None" ? "- [License](#license)" : ""}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to contact me:

- **GitHub**: [alexis-menendez](https://github.com/alexis-menendez)
- **Email**: [alexis.menendez@austincc.edu](mailto:alexis.menendez@austincc.edu)

${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
