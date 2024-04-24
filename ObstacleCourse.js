// Programmer: Bella
// Team Member: Hailioso
// Bolt ID: B2F8
// Date: 4.24.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16752511/edit


//Bella Williams
async function startProgram() {
	setMainLed({ r: 255, g: 0, b: 0});
	await speak("Booting obstacle course scan, scan completed, starting course.", true)
	await roll((getHeading() -180), 80, 2.5);
	await delay(2);
	
}