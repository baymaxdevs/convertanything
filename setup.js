/**
 * ConvertAnything Setup Script
 * 
 * This script helps set up the ConvertAnything project by:
 * 1. Creating necessary configuration files from examples
 * 2. Prompting for Firebase configuration values
 * 3. Setting up environment variables
 * 
 * Usage: node setup.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 Welcome to ConvertAnything Setup!\n');

// Files to copy from example templates
const filesToCopy = [
  { from: '.firebaserc.example', to: '.firebaserc' },
  { from: 'firebase.json.example', to: 'firebase.json' },
  { from: 'frontend/src/firebase-config.example.js', to: 'frontend/src/firebase-config.js' },
  { from: 'frontend/.env.example', to: 'frontend/.env' }
];

// Create configuration files from examples
console.log('📁 Creating configuration files from templates...');
filesToCopy.forEach(file => {
  try {
    if (fs.existsSync(file.from)) {
      const content = fs.readFileSync(file.from, 'utf8');
      fs.writeFileSync(file.to, content);
      console.log(`✅ Created ${file.to}`);
    } else {
      console.log(`❌ Template file ${file.from} not found`);
    }
  } catch (error) {
    console.error(`❌ Error creating ${file.to}:`, error.message);
  }
});

console.log('\n🔧 Setup complete!');
console.log('\nNext steps:');
console.log('1. Update the Firebase configuration in frontend/src/firebase-config.js');
console.log('2. Update the environment variables in frontend/.env');
console.log('3. Update the Firebase project ID in .firebaserc');
console.log('4. Run "npm install" in both the frontend and functions directories');
console.log('5. Run "npm start" in the frontend directory to start the development server');

rl.close();
