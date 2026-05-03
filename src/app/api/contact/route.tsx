// This file is intentionally left as a redirect.
// The actual implementation lives in route.ts.
// We cannot delete files via the GitHub API, but Next.js will use
// the .ts file and ignore this .tsx file when both export nothing.
// Having BOTH a named export and this file would cause a conflict,
// so this file exports nothing — route.ts owns the POST handler.
export {};
