import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const myDataStructure = data.asteroids.reduce(
    (acc, asteroid) => {
      const discoveryYear = asteroid.discoveryYear;
      acc[2].hasOwnProperty(discoveryYear) ?
        acc[2] = {...acc[2],  [discoveryYear]: [...acc[2][discoveryYear], asteroid.name]}
      :
        acc[2] = {...acc[2],  [discoveryYear]: [asteroid.name] }
      
      let lengthObj = acc[2][discoveryYear].length
       acc = lengthObj > acc[0] ? [lengthObj, discoveryYear, acc[2]] : [acc[0], acc[1], acc[2]] ;
       return (acc);
}, [0, 0, {}]);
return myDataStructure[1];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
