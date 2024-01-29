const printPyramid = (high, printString) => {
	let line = '';
	for (let i = 1; i <= high; i++) {
		line += printString;
		console.log(line);
	}
}

printPyramid(13, 'T');
