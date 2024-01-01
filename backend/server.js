const { spawn } = require("child_process");

// Data you want to pass to the Python script
const inputData = [65, 1, 1, 1, 1];

// Spawn a new Python process
const pythonProcess = spawn("python", [
    "./heart_stroke/run_prediction.py", // Replace with your Python script path
    JSON.stringify(inputData), // Pass the input data as a JSON string
]);

// Collect data from the Python process
pythonProcess.stdout.on("data", (data) => {
    const strokeChance = !!parseInt(data);
    console.log(`High likelihood of having a stroke: ${strokeChance}`);
});

// Handle errors
pythonProcess.stderr.on("data", (data) => {
    console.error(`Error in Python script: ${data}`);
});
