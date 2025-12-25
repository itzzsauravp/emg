import { createFile, createFolder } from "./helpers/file.helpers";
import { argParse, showHelp } from "./helpers/general.helpers";

const help = argParse("-h");
const fileToGenerate = argParse("-f");
const moduleToGenerate = argParse("-g");

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
