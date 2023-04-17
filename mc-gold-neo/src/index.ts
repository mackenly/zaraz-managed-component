import { ComponentSettings, MCEvent, Manager } from '@managed-components/types';

// This function will be called when a pageview event is triggered
export const onPageview = (event: MCEvent): void => {
  const { client } = event;
  // Print the date to the console
  client.execute("console.log(new Date());")
};

// This function will be called when the component is loaded
export default async function (manager: Manager, settings: ComponentSettings) {
  // Create a new event listener for the pageview event
  manager.addEventListener('pageview', onPageview);
};