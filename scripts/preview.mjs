#!/usr/bin/env node

import { parseArgs } from 'node:util';
import fs from 'fs/promises';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Path from '../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse command line arguments
const { values: { c } } = parseArgs({
  options: {
    c: {
      type: 'string',
      short: 'c',
      default: ''
    }
  }
});

if (!c) {
  console.error('Please provide a Path command using --c option');
  process.exit(1);
}


const P = new Path();
P.M(250, 250);
let x = c
x = x.replace(/\s+/g, '');
const cmd = x.split('(');
const name = cmd[0];
const args = cmd[1].split(',');
const numericArgs = args.map(arg => parseFloat(arg));
P[name](...numericArgs);




// Generate HTML content
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>SVG Path Preview</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
    }
    svg {
      background-color: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <svg width="500" height="500" viewBox="0 0 500 500">
    <path d="${P.toString()}" stroke="black" fill="none" />
  </svg>
</body>
</html>
`;

// Write HTML file
const outputPath = join(__dirname, 'preview.html');
await fs.writeFile(outputPath, htmlContent);

// Open in default browser
const command = process.platform === 'win32' ? 'start' :
                process.platform === 'darwin' ? 'open' : 'xdg-open';

exec(`${command} ${outputPath}`, (error) => {
  if (error) {
    console.error('Error opening the preview:', error);
    process.exit(1);
  }
}); 