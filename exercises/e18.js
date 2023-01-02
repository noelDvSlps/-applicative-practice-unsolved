import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  const uniqueYear = [...new Set(asteroids.map(asteroid => asteroid.discoveryYear))];
    let numberOfAsteroids = 0;
    let year = 0;
    for (let i = 0; i < uniqueYear.length; i++){
        let num = (asteroids.filter(asteroid => asteroid.discoveryYear === uniqueYear[i])).length;
        if (num > numberOfAsteroids) {
            numberOfAsteroids = num;
            year = uniqueYear[i];
        }
    }
    return year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
