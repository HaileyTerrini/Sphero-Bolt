// Programmer: Haile
// Team Member: Bella
// Bolt ID: B2F8
// Date: 4.24.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16752511/edit


//Bella Williams- PC #5 - Checkpoint ONE - red
async function startProgram() {
	setMainLed({ r: 255, g: 0, b: 0});
	await Sound.Animal.Monkey.play(true);
	await speak("Booting obstacle course scan, scan completed, starting course.", true)
	await roll((getHeading() -180), 80, 2.5);
	await delay(3);
	
// Hailey- PC #6 - Checkpoint- Checkpoint TWO - blue
	
	setMainLed({ r: 0, g: 0, b: 255});
	await Sound.Animal.HorseGallop.play(true);
	await speak("Checkpoint Two Commencing", true)
	await roll((getHeading() -270), 70, 2.5);
	
	await delay(3);
}