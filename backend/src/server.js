const app = require('./app');
const { port } = require('./config/env');
const prisma = require('./config/prisma');

const server = app.listen(port, () => {
  console.log(`Srijan API listening on port ${port}`);
});

async function shutdown() {
  console.log('Shutting down gracefully...');
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
