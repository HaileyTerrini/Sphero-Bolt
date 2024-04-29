// Programmer: Haile
// Team Member: Bella
// Bolt ID: B2F8
// Date: 4.29.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16752511/edit


	//Bella - PC #5 - Checkpoint ONE - red
async function startProgram() {
	setMainLed({ r: 255, g: 0, b: 0});
	await Sound.Animal.Monkey.play(true);
	await speak("Booting obstacle course scan, scan completed, starting course.", true)
	await roll((getHeading() -180), 80, 3);
	await delay(3);	

	// Hailey- PC #6 - Checkpoint TWO - blue
	
	setMainLed({ r: 0, g: 0, b: 255});
	await Sound.Animal.HorseGallop.play(true);
	await speak("Checkpoint Two Commencing", true)
	await roll((getHeading() -270), 80, 3);
	
	await delay(3);


	// Bella- PC #5 - Checkpoint THREE - green
	
	setMainLed({ r: 0, g: 255, b: 0});
	await Sound.Animal.Sheep.play(true);
	await speak("Checkpoint Three Commencing", true)
	await roll((getHeading() -70), 60, 3);
	
	await delay(3);

	// Hailey - PC #6 - Checkpoint FOUR - Purple
	
	setMainLed({ r: 0, g: 0, b: 0, p: 255});
	await Sound.Animal.Whale.play(true);
	await speak("Checkpoint Four Commencing", true)
	await roll((getHeading() -150), 100, 4);
	
	await delay(3); 
await Sound.Animal.Duck.play(true);

}