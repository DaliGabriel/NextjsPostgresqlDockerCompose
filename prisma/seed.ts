// Import Prisma Client
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define the main function that will handle database operations
async function main() {
	// Create a new user in the database using Prisma Client
    const newUsers = await prisma.user.createMany({
		data: [
		  {
			email: 'alice@example.com',
			name: 'Alice',
			password: 'securepassword123', // In a real app, hash these!
		  },
		  {
			email: 'bob@example.com', 
			name: 'Bob',
			password: 'anothersecurepassword', // Hash these too!
		  },
		  // ... add more user objects as needed ...
		],
	  });
  
	  console.log('Created users:', newUsers);
}

// Execute the main function and handle disconnection and errors
main()
	.then(() => prisma.$disconnect()) // Disconnect from the database on successful completion
	.catch(async (e) => {
		console.error(e); // Log any errors
		await prisma.$disconnect(); // Ensure disconnection even if an error occurs
		process.exit(1); // Exit the process with an error code
	});