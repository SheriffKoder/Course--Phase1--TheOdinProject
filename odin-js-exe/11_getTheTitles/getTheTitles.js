/*
const getTheTitles = function(array) {
  return array.map(book => book.title);
};
*/

const getTheTitle = function(input) {

    console.log(input[0].title);
    let output = [];

    for (i=0; i<(input.length); i++) {
        output.push(input[i].title);
    }

    console.log(output);

};

const getTheTitles = (input, output=[]) => {

    for (i in input) {
        output.push(input[i].title);
    }
    return output;

};

/*
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

console.log(getTheTitles(books));
*/


// Do not edit below this line

module.exports = getTheTitles;
