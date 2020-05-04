'use strict';

const fs = require('fs');
const Handlebars = require('handlebars');
const yaml = require('js-yaml');

// Define Handlebars helpers
Handlebars.registerHelper('isCustomAnchorNeeded', function (name, title) {
  return name !== title.toLowerCase().replace(/[#+]/g, '').replace(/ /g, '-');
});

Handlebars.registerHelper('isInCategory', function (name, categories) {
  return categories.includes(name);
});

// Load database
const db = yaml.safeLoad(fs.readFileSync('./db.yml', 'utf8'));

// Prepare Awesome List template
const generate = Handlebars.compile(fs.readFileSync('./template.handlebars', 'utf8'));

// Generate new README.md
const readme = generate(db);

// Write
fs.writeFileSync('../README.md', readme);
