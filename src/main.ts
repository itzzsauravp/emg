import { generateFile } from "./helpers/file.helpers";
import { argParse, showHelp } from "./helpers/general.helpers";

const help = argParse("-h");
const fileToGenerate = argParse("-f");
const moduleToGenerate = argParse("-g");

if (!fileToGenerate || !moduleToGenerate || help) {
  showHelp();
}

if (fileToGenerate && moduleToGenerate) {
  generateFile(fileToGenerate!, moduleToGenerate);
}
