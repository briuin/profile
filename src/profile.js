import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@briuin/avatar",
  () => System.import("@briuin/avatar"),
  isActive.navbar
);

registerApplication(
  "@briuin/timeline",
  () => System.import("@briuin/timeline"),
  isActive.navbar
);

start();
