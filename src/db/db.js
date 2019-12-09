import React from "react";
import nanoid from "nanoid";
import ActionButton from "../components/ActionButton";
import { makeAnIP, randomNumberGenerator } from "../helpers/ipGenerator";
import randomDate from "../helpers/dateGenerator";

// const headers = [
//   {
//     key: "name",
//     header: "Name"
//   },
//   // {
//   //   key: "label",
//   //   header: ""
//   // },
//   {
//     key: "type",
//     header: "Type"
//   },
//   {
//     key: "location",
//     header: "Location"
//   },
//   {
//     key: "publicIp",
//     header: "Public IP"
//   },
//   {
//     key: "privateIp",
//     header: "Private IP"
//   },
//   {
//     key: "startDate",
//     header: "Start Date"
//   },
//   {
//     key: "action",
//     header: ""
//   }
// ];

const headers = [
  "name",
  "type",
  "location",
  "publicIp",
  "privateIp",
  "startDate",
  "action"
];

const rows = [
  {
    // // id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),

    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),

    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),

    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),

    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),

    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "SLADC232270-msf",
    // label: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "softlayer.emerald.com",
    // label: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "control.integrationdemo",
    // label: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "prod.checkout.com",
    // label: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  },
  {
    id: nanoid(),
    name: "baremetal.emerald.com",
    // label: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: makeAnIP(randomNumberGenerator),
    privateIp: makeAnIP(randomNumberGenerator),
    startDate: randomDate(new Date(2017, 0, 1), new Date()),
    action: <ActionButton />
  }
];

const db = {
  headers,
  rows
};

export default db;
