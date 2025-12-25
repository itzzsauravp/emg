import { createFile, createFolder } from "./helpers/file.helpers";
import { argParse, showHelp } from "./helpers/general.helpers";

const help = argParse("--help");
const fileToGenerate = argParse("--file");
const moduleToGenerate = argParse("--generate");

console.log(help, fileToGenerate, moduleToGenerate);

if (!fileToGenerate || help) {
    showHelp();
}

if (fileToGenerate && moduleToGenerate) {
    createFolder(moduleToGenerate);
    createFile(fileToGenerate, moduleToGenerate)
}

if (!moduleToGenerate && fileToGenerate) {
    createFile(fileToGenerate, moduleToGenerate)
}
