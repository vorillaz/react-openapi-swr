import fs from 'fs/promises';
import path from 'path';

async function isExists(path: string) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

export async function writeFile(filePath: string, data: any) {
  try {
    const dirname = path.dirname(filePath);
    const exist = await isExists(dirname);
    if (!exist) {
      await fs.mkdir(dirname, { recursive: true });
    }

    await fs.writeFile(filePath, data, 'utf8');
  } catch (err) {
    throw new Error(err as string);
  }
}
