var input =  document.getElementById("input");
function values(num){
  console.log(num)
  input.value += num;
}
input.style.fontSize = "30px";
function equal(){
   console.log(input.value) 
  input.value = eval(input.value)
  Math.round(input.value) 
}

console.log(input.value);

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


let total = 0;
for (let i = myArr.length - 1; i >= 0; i--) {
  total += myArr[i];
}

// program to count down numbers to 1
function countDown(number) {

  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
      countDown(newNumber);
  }
}

countDown(4);