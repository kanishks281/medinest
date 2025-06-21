import { PrismaClient } from '@prisma/client'

export const db = globalThis.prisma || new PrismaClient();
//next js uses hot reloading during development, which can cause multiple instances of PrismaClient to be created.
// This can lead to issues like too many connections to the database.
// To prevent this, we check if a PrismaClient instance already exists in the global scope.
if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.