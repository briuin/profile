import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";
import { storeInstance } from "./store";
import { GlobalEventDistributor } from "./global-event-distributor";

const customProps = {
  store: storeInstance,
  globalEventDistributor: new GlobalEventDistributor()
};

registerApplication(
  "@briuin/avatar",
  () => System.import("@briuin/avatar"),
  isActive.navbar,
  customProps
);

registerApplication(
  "@briuin/timeline",
  () => System.import("@briuin/timeline"),
  isActive.navbar
);

start();
