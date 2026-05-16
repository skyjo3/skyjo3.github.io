#!/usr/bin/env node
// Usage: node scripts/hash-password.js <yourpassword>
// Hashes the password and updates REACT_APP_PROJECT_PASSWORD_HASH in .env

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.js <yourpassword>');
  process.exit(1);
}

const hash = crypto.createHash('sha256').update(password).digest('hex');
const envPath = path.resolve(__dirname, '../.env');

let content = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';

const line = `REACT_APP_PROJECT_PASSWORD_HASH=${hash}`;
if (content.match(/^REACT_APP_PROJECT_PASSWORD_HASH=.*/m)) {
  content = content.replace(/^REACT_APP_PROJECT_PASSWORD_HASH=.*/m, line);
} else {
  content = content.trimEnd() + (content ? '\n' : '') + line + '\n';
}

fs.writeFileSync(envPath, content, 'utf8');
console.log('Password updated successfully.');
