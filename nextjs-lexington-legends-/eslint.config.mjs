import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  },
});

const eslintConfig = [
  // Extend Next.js and TypeScript configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add parser for TypeScript
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
    plugins: [
      "@typescript-eslint",
      "react",
      "jsx-a11y", // For accessibility rules
    ],
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      // Disable "no-unused-vars" rule (no longer shows errors for unused vars)
      "@typescript-eslint/no-unused-vars": "off",

      // Set "prefer-const" to warn instead of error (encourages const but doesn’t fail build)
      "prefer-const": "warn",

      // Disable "react/no-unescaped-entities" rule to avoid issues with single quotes in JSX
      "react/no-unescaped-entities": "off",

      // Optional: Other rules you might want to relax
      "no-console": "warn", // Warn about console.log instead of error
      "no-debugger": "warn", // Warn about debugger statements
    },
  },
];

export default eslintConfig;
