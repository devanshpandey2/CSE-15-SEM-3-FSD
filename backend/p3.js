const fs = require('fs').promises;

async function createFile(filePath, content) {
	await fs.writeFile(filePath, content, 'utf8');
	console.log(`Created: ${filePath}`);
}

async function readFile(filePath) {
	const content = await fs.readFile(filePath, 'utf8');
	console.log(`Content of ${filePath}:\n${content}`);
	return content;
}

async function updateFile(filePath, content) {
	await fs.appendFile(filePath, content, 'utf8');
	console.log(`Updated: ${filePath}`);
}

async function deleteFile(filePath) {
	await fs.unlink(filePath);
	console.log(`Deleted: ${filePath}`);
}

async function demonstrateCrud() {
	const filePath = 'crud-example.txt';

	try {
		await createFile(filePath, 'This is the original content.\n');
		await readFile(filePath);
		await updateFile(filePath, 'This line was added during the update.\n');
		await readFile(filePath);
	} finally {
		await deleteFile(filePath);
	}
}

if (require.main === module) {
	demonstrateCrud().catch((error) => {
		console.error('File CRUD operation failed:', error.message);
	});
}

module.exports = {
	createFile,
	readFile,
	updateFile,
	deleteFile
};
