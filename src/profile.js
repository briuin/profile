import "zone.js";
import * as singleSpa from "single-spa";
import { GlobalEventDistributor } from "./global-event-distributor";
import { loadApp } from "./helper";

async function init() {
  const globalEventDistributor = new GlobalEventDistributor();
  const loadingPromises = [];

  loadingPromises.push(
    loadApp(
      "@briuin/avatar",
      "",
      "@briuin/avatar",
      "@briuin/avatar/store.js",
      globalEventDistributor
    )
  );

  loadingPromises.push(
    loadApp(
      "@briuin/timeline",
      "",
      "@briuin/timeline",
      "@briuin/timeline/store.js",
      globalEventDistributor
    )
  );

  await Promise.all(loadingPromises);

  singleSpa.start();
}

init();
