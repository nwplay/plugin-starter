/*
This is the Plugin Entry File
 */
import * as pkg from './package.json';

export const pluginName = pkg.pluginName;
export const pluginVersion = pkg.version;
export const pluginDescription = pkg.description;
export * from './src/main';
