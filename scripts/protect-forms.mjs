// Run once with the approved PDFs outside the repository. Never print or commit the key.
import { createCipheriv, randomBytes } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { products } from '../server/payments/core.mjs';
const source = process.argv[2];
if (!source || !process.env.MHC_DOWNLOAD_KEY) throw new Error('Usage: MHC_DOWNLOAD_KEY=<base64 key> node scripts/protect-forms.mjs /private/pdf-directory');
const key = Buffer.from(process.env.MHC_DOWNLOAD_KEY, 'base64');
if (key.length !== 32) throw new Error('A 32-byte key is required.');
await mkdir('private/forms', { recursive: true });
for (const product of Object.values(products)) {
  const pdf = await readFile(`${source}/${product.file}`);
  if (!pdf.subarray(0, 5).equals(Buffer.from('%PDF-'))) throw new Error('Expected a PDF.');
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const bytes = Buffer.concat([cipher.update(pdf), cipher.final()]);
  await writeFile(`private/forms/${product.file}.enc`, Buffer.concat([iv, cipher.getAuthTag(), bytes]));
}
