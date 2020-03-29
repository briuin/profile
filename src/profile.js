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
      null,
      globalEventDistributor
    )
  );

  loadingPromises.push(
    loadApp(
      "@briuin/timeline",
      null,
      "@briuin/timeline",
      "@briuin/timeline/store",
      globalEventDistributor
    )
  );

  loadingPromises.push(
    loadApp(
      "@briuin/experience",
      null,
      "@briuin/experience",
      null,
      globalEventDistributor
    )
  );

  await Promise.all(loadingPromises);

  singleSpa.start();
}

init();
