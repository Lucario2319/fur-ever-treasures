import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';
import schemas from "./schemas";

const config = defineConfig({
    projectId: "0cx3x2qb",
    dataset: "production",
    title: "fureverTreasures",
    apiVersion: "2023-03-04",
    basePath: "/admin",

    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;