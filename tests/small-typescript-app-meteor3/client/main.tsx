import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App'
import { sharedString, sharedObject } from '/imports/exported';

import { LinksCollection } from '/imports/api/links';

console.log(sharedString);
console.log(sharedObject.client);
console.log(LinksCollection.allow);

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
