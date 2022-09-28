const userIntervals = process.argv.splice(2);

const manageTimers = function (array) {
  for (let interval of array) {
    if (!Number.isNaN(interval) && interval > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, interval * 1000);
    }
  }
};

manageTimers(userIntervals);