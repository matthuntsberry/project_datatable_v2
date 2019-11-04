import React from "react";
import ActionButton from "../components/ActionButton";

const headers = [
  {
    key: "name",
    header: "Name"
  },
  {
    key: "type",
    header: "Type"
  },
  {
    key: "location",
    header: "Location"
  },
  {
    key: "publicIp",
    header: "Public IP"
  },
  {
    key: "privateIp",
    header: "Private IP"
  },
  {
    key: "startDate",
    header: "Start Date"
  },
  {
    key: "action",
    header: ""
  }
];

const rows = [
  {
    id: "1",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "158.175.124.13",
    privateIp: "10.45.20.70",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "2",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "169.57.196.29",
    privateIp: "10.150.118",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "3",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.1.46.9",
    privateIp: "10.80.52.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "4",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "108.168.213.23",
    privateIp: "10.45.25.70",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "5",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "184.173.20.67",
    privateIp: "10.45.20.70",
    startDate: "2017-05-24",
    action: <ActionButton />
  },
  {
    id: "6",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "158.175.124.13",
    privateIp: "10.45.20.70",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "7",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "169.57.196.29",
    privateIp: "10.150.118",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "8",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.1.46.9",
    privateIp: "10.80.52.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "9",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "108.168.213.23",
    privateIp: "10.45.25.70",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "10",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "184.173.20.67",
    privateIp: "10.45.20.70",
    startDate: "2017-05-24",
    action: <ActionButton />
  },
  {
    id: "11",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "158.175.124.13",
    privateIp: "10.45.20.70",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "12",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "169.57.196.29",
    privateIp: "10.150.118",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "13",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.1.46.9",
    privateIp: "10.80.52.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "14",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "108.168.213.23",
    privateIp: "10.45.25.70",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "15",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "184.173.20.67",
    privateIp: "10.45.20.70",
    startDate: "2017-05-24",
    action: <ActionButton />
  },
  {
    id: "16",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "158.175.124.13",
    privateIp: "10.45.20.70",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "17",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "169.57.196.29",
    privateIp: "10.150.118",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "18",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.1.46.9",
    privateIp: "10.80.52.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "19",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "108.168.213.23",
    privateIp: "10.45.25.70",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "20",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "184.173.20.67",
    privateIp: "10.45.20.70",
    startDate: "2017-05-24",
    action: <ActionButton />
  }
];

const db = {
  headers,
  rows
};

export default db;
