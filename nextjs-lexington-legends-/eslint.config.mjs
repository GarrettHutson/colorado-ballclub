import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable "no-unused-vars" rule
      "@typescript-eslint/no-unused-vars": "off",

      // Disable "prefer-const" rule
      "prefer-const": "off",

      // You can add any other rules to disable here
    },
  },
];

export default eslintConfig;
