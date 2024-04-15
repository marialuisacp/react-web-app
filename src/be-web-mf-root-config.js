import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => {
    return System.import(name);
  }
});

export function mount() {
  return new Promise((resolve, reject) => {
    // Always reject with an Error.
    reject(new Error('hi'));
  });
}

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});


applications.forEach(registerApplication);

layoutEngine.activate();
start();


