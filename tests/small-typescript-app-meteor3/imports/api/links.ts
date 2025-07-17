import { Mongo } from 'meteor/mongo';

import { sharedObject } from '../exported';

export interface Link {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
}

export const LinksCollection = new Mongo.Collection<Link>('links');

console.log("", sharedObject.shared);