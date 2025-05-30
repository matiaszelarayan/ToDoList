import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, '@typescript-eslint': tseslint.plugin, react: pluginReact },
    extends: [
      "js/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      // Desactiva la regla de React en JSX Scope para React 17+
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Desactiva la validación de tipos de propiedades en componentes de clase
      // Puedes agregar más reglas personalizadas aquí
    },
    settings: {
      react: { version: "detect" }
    }
  }
]);
