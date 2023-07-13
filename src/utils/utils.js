
const millisToTime = function (mis) {

    function addZ(n) {
      return (n < 10 ? '0' : '') + n;
    }

    const ms = mis % 1000;
    mis = (mis - ms) / 1000;
    const secs = mis % 60;
    mis = (mis - secs) / 60;
    const mins = mis % 60;
    const hors = (mis - mins) / 60;
    return addZ(hors) + ':' + addZ(mins) + ':' + addZ(secs);
  }

  const date = function (d) {
    const dateOnly = d.split('T')[0];
    const dateSort = dateOnly.split('-');
    const reversedDate = dateSort[2] + "-" + dateSort[1] + "-" + dateSort[0];
    return reversedDate;
  }

export {millisToTime, date};