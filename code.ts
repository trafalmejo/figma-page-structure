// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

let pages = [
  "Cover",
  "About",
  "Latest Designs",
  "Hand Off",
  "-----------",
  "[Date] Design Review",
  "-----------",
  "Sandbox",
  "Graveyard",
];

let currentPage = figma.currentPage;
currentPage.name = pages[0];

for (let page of pages.slice(1)) {
  let newPage = figma.createPage();
  newPage.name = page;
}

figma.notify("Pages created");

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
