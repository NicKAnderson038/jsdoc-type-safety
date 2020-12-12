// TypeScript v3 can't resolve modules with a nonstandard extension, only 'js', 'jsx', 'ts', 'tsx'

// declare module '*.png' {
//     const content: string;
//     export = content;
// }

/**
 * Typescript v4 seems to be about to resolve.
 * Still need the react-app-env.d.ts file. Most likely react is handling this issue internally.
 * The functionality above maybe useful for file types not handled by create-react-app.
 */