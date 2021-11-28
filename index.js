// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//     //...
//   ]
  
superbowlWin = (record) => {
    let result = record.find( record => record.result === "W" )
    return !!result ? result.year : undefined
  }

// const superbowlWin = record.find(function (record) {
// function superbowlWin(record) {
//     if (record.result === 'W') {
//         return Object.assign({}, record, {
//             year: record.year,
//     })
// } else {
//         return "undefined"
//     }
// }
