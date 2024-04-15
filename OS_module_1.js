const { log } = require("console");
const os = require("os");
// user information
const user = os.userInfo();
console.log(user);
// methods returns the system uptime in seconds
console.log(os.uptime());
// making object to give info about os
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);