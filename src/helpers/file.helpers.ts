import fs from "fs";
import path from "path";
import type { TModulestoGenerate } from "../types/types";
import { generateFileContent, resolveType } from "./general.helpers";

const SRC_DIR = path.resolve(process.cwd(), "src");
export function doesFolderExist(folderName: string): boolean {
    const folderPath = path.join(SRC_DIR, folderName);
    try {
        return fs.statSync(folderPath).isDirectory();
    } catch (err: any) {
        if (err.code === "ENOENT") return false;
        throw err;
    }
}

export function doesFileExist(
    fileName: string,
    type: TModulestoGenerate | string,
): boolean {
    const filePath = path.join(SRC_DIR, type, fileName);
    try {
        return fs.statSync(filePath).isFile();
    } catch (err: any) {
        if (err.code === "ENOENT") return false;
        throw err;
    }
}

export function createFolder(name: string): void {
    const folderPath = path.join(SRC_DIR, name);

    if (doesFolderExist(name)) {
        console.log(`Folder already exists: ${folderPath} `);
        return;
    }

    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath} `);
}

export function createFile(name: string, type?: string): void {
    let filePath: string
    if (type) {
        filePath = path.join(SRC_DIR, type, name);

        if (doesFileExist(name, type)) {
            console.log(`File already exists: ${filePath} `);
            return;
        }

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
    } else {
        filePath = path.join(SRC_DIR, name);
    }
    fs.writeFileSync(filePath, generateFileContent(type, name).trim(), {
        flag: "wx",
    });

    console.log(`Created file: ${filePath} `);
}
