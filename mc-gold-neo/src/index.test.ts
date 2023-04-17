// import required modules
import { MCEvent } from '@managed-components/types';
import { onPageview } from "./index";

// describe the test
describe('Test the date print MC', () => {
  // initialize an empty array to hold executed js code strings
  const executedJS: any[] = [];

  // create a fake event with pre-defined properties
  const testEvent = new Event('pageview', {}) as MCEvent;
  testEvent.client = {
    emitter: 'browser',
    userAgent: '',
    language: 'en-US',
    referer: '',
    ip: '127.0.0.1',
    url: new URL('http://127.0.0.1'),
    fetch: () => undefined,
    set: () => undefined,
    execute: jsString => {
      // add the executed code string to the array
      executedJS.push(jsString)
      return true
    },
    return: () => { },
    get: () => undefined,
    attachEvent: () => { },
    detachEvent: () => { },
  };

  // call the onPageview function with the fake event
  onPageview(testEvent);

  // make assertions about the client code that was executed
  it('When event listener fires', () => {
    expect(executedJS.length).toBe(1); // check that only one code string was executed
    expect(executedJS[0]).toBe("console.log(new Date());"); // check that the code string that was executed was to log the current date
  });
});