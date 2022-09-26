assertEqual = require('../assertEqual');

console.log('These should pass:')
assertEqual(1, 1);
assertEqual(1 + 2, 3);
assertEqual('Jillian', "Jillian");
assertEqual('Jill' + 'ian', 'Jillian');
console.log('These should Fail:')
assertEqual(1, 5);
assertEqual(1, '1');
assertEqual('Jill', 'Jillian');