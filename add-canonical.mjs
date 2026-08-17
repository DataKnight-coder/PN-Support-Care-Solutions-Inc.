import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src', 'app');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (file === 'page.tsx') {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walkDir(SRC_DIR);

files.forEach((file) => {
  const relativePath = path.relative(SRC_DIR, file).replace(/\\/g, '/').replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
  const urlPath = relativePath === '' ? '/' : `/${relativePath}`;
  
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('export const metadata: Metadata = {')) {
    // Check if alternates already exists
    if (!content.includes('alternates: {')) {
      content = content.replace('export const metadata: Metadata = {', `export const metadata: Metadata = {\n  alternates: { canonical: '${urlPath}' },`);
      fs.writeFileSync(file, content);
      console.log(`Updated ${file} with canonical ${urlPath}`);
    }
  } else if (content.includes('export async function generateMetadata')) {
      // Dynamic metadata like care-journal/[slug]
      // We will handle this manually if needed, or inject it
      if (file.includes('[slug]')) {
         // Modify generateMetadata to include alternates
         if (content.includes('return {') && !content.includes('alternates:')) {
             content = content.replace('return {', "const urlPath = `/care-journal/${params.slug}`;\n  return {\n    alternates: { canonical: urlPath },");
             fs.writeFileSync(file, content);
             console.log(`Updated dynamic ${file}`);
         }
      }
  }
});

console.log('Canonical URLs injected.');
