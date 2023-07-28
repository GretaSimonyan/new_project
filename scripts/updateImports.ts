// import { Project } from 'ts-morph';
//
// // initialize
// const project = new Project({});
//
// project.addSourceFilesFromTsConfig('src/**/*.ts');
// project.addSourceFilesFromTsConfig('src/**/*.tsx');
//
// const files = project.getSourceFiles();
//
// function isAbsolute(val: string) {
//   const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
//   return layers.some((layer) => val.startsWith(layer));
// }
//
// files.forEach((sourceFile) => {
//   const importDeclarations = sourceFile.getImportDeclarations();
//   importDeclarations.forEach((importDeclaration) => {
//     const value = importDeclaration.getModuleSpecifierValue();
//     if (isAbsolute(value)) {
//       importDeclaration.setModuleSpecifier(`@/${value}`);
//     }
//   });
// });
//
// project.save();
