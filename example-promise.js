// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found...');
// }

// getTempCallback('Philadelphia', function(err, temp) {
//     if (err) {
//         console.log('Error', err);
//     } else {
//         console.log('Success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 5000);
//     });
// }

// getTempPromise('Philadelphia').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// })

//  CHALLENGE AREA

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A & B need to be numbers');
        }
    });
}

addPromise(4, 8).then(function(sum) {
    console.log('promise success', sum);
}, function(err) {
    console.log('promise error', err);
})