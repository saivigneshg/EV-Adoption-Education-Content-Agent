import fs from 'fs';
const data = JSON.parse(fs.readFileSync('full_models.json', 'utf8'));
const flash15 = data.models.find(m => m.name.includes('gemini-1.5-flash'));
console.log(flash15 ? JSON.stringify(flash15, null, 2) : "Not found");
