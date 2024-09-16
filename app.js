//Part 1: Refactoring Old Code
//Headers as Object Keys: The first row (headers) is split and used as keys for objects representing each row's data.
//Array of Objects: Each row is converted into an object where the keys are the header names and the values are the corresponding cell data.
//Return Structured Data: Instead of just logging the CSV rows, the function now returns an array of objects, which can be further used for manipulation or analysis.
//Better Data Representation: The new format allows you to access any specific column easily using its header as a key, improving the code's flexibility.

function parseCSV(csvString) {
    const rows = csvString.split('\r\n'); 
    const headers = rows[0].split(',');   
    const result = [];
    
    
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].split(',');  
        let obj = {};                     

       
        headers.forEach((header, index) => {
            obj[header] = cells[index];
        });

        result.push(obj);                 
    }
    return result;                       


let csvData1 = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let csvData2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\r\n1,0.00,0.050,0.050\r\n2,0.49,0.066,0.066\r\n3,0.98,0.087,0.080\r\n4,1.47,0.116,0.108\r\n5,1.96,0.142,0.138\r\n6,2.45,0.166,0.158\r\n7,2.94,0.193,0.174\r\n8,3.43,0.204,0.192\r\n9,3.92,0.226,0.205\r\n10,4.41,0.238,0.232";


let parsedData1 = parseCSV(csvData1);
let parsedData2 = parseCSV(csvData2);


console.log("Parsed CSV Data 1:");
console.log(parsedData1);

console.log("\nParsed CSV Data 2:");
console.log(parsedData2);

//Part 2: Expanding Functionality//


function parseCSVTo2DArray(csvString) {
    const rows = csvString.split('\r\n'); 
    const result = [];
    

    for (let row of rows) {
        let columns = row.split(',');    
        result.push(columns);            
    }
    
    const numberOfColumns = result[0].length; 
    console.log(`Number of columns: ${numberOfColumns}`);
    
    return result;                      
}


let csvData1 = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let csvData2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\r\n1,0.00,0.050,0.050\r\n2,0.49,0.066,0.066\r\n3,0.98,0.087,0.080\r\n4,1.47,0.116,0.108\r\n5,1.96,0.142,0.138\r\n6,2.45,0.166,0.158\r\n7,2.94,0.193,0.174\r\n8,3.43,0.204,0.192\r\n9,3.92,0.226,0.205\r\n10,4.41,0.238,0.232";


let parsedData1 = parseCSVTo2DArray(csvData1);
let parsedData2 = parseCSVTo2DArray(csvData2);


const csvCache1 = parsedData1;
const csvCache2 = parsedData2;


console.log("Parsed CSV Data 1 (2D Array):");
console.log(parsedData1);

console.log("\nParsed CSV Data 2 (2D Array):");
console.log(parsedData2);

//PArt 3: Transforming Data//

// Function to convert a 2D CSV array into an array of objects
function convertCSVToObjects(csvArray) {
    const headers = csvArray[0]; // First row contains the headers
    const result = [];

    // Loop through each data row starting from index 1 (skip the header row)
    for (let i = 1; i < csvArray.length; i++) {
        let row = csvArray[i];
        let obj = {}; // Create an object for each row

        // Loop through each cell and map it to the corresponding header
        headers.forEach((header, index) => {
            // Use the header as the key and convert it to lowercase
            let key = header.toLowerCase();
            obj[key] = row[index];
        });

        result.push(obj); // Add the object to the result array
    }

    return result; // Return the array of objects
}

// Example CSV 2D array (result from previous step)
let csvArray1 = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"]
];

let csvArray2 = [
  ["Index", "Mass (kg)", "Spring 1 (m)", "Spring 2 (m)"],
  ["1", "0.00", "0.050", "0.050"],
  ["2", "0.49", "0.066", "0.066"],
  ["3", "0.98", "0.087", "0.080"],
  ["4", "1.47", "0.116", "0.108"],
  ["5", "1.96", "0.142", "0.138"],
  ["6", "2.45", "0.166", "0.158"],
  ["7", "2.94", "0.193", "0.174"],
  ["8", "3.43", "0.204", "0.192"],
  ["9", "3.92", "0.226", "0.205"],
  ["10", "4.41", "0.238", "0.232"]
];

// Convert the 2D CSV arrays into arrays of objects
let parsedObjects1 = convertCSVToObjects(csvArray1);
let parsedObjects2 = convertCSVToObjects(csvArray2);

// Log the results
console.log("Parsed Objects from CSV Data 1:");
console.log(parsedObjects1);

console.log("\nParsed Objects from CSV Data 2:");
console.log(parsedObjects2);


//Part 4: Sorting and Manipulating Data//

// Initial array of objects
let data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
  ];
  
  // Step 1: Remove the last element
  data.pop(); // Removes Bill
  
  // Step 2: Insert new object at index 1
  data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
  
  // Step 3: Add a new object to the end of the array
  data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
  
  // Logging the modified array (for verification)
  console.log("Modified Data:");
  console.log(data);
  
  // Step 4: Calculate the average age
  let totalAge = 0;
  for (let i = 0; i < data.length; i++) {
    totalAge += parseInt(data[i].age); // Ensure that the age is an integer
  }
  let averageAge = totalAge / data.length;
  
  console.log(`Average Age: ${averageAge}`);
  
//PArt 5: Full Circle//
s
let data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  // Function to convert the array of objects to CSV format using reduce
  function convertObjectsToCSV(dataArray) {
      if (dataArray.length === 0) return ""; // Return empty if no data
  
      // Get the headers by extracting the keys from the first object
      const headers = Object.keys(dataArray[0]);
  
      // Build the CSV rows using reduce
      const csv = dataArray.reduce((acc, obj) => {
          // Create a row by mapping values in the same order as the headers
          const row = headers.map(header => obj[header]).join(",");
          // Append the row to the accumulator string
          return acc + row + "\n";
      }, headers.join(",") + "\n"); // Start with the headers as the first row
  
      return csv.trim(); // Remove any trailing newlines
  }
  
  // Convert the final data to CSV format
  let csvData = convertObjectsToCSV(data);
  
  // Log the resulting CSV format
  console.log("CSV Format:");
  console.log(csvData);
  