import sqlite3 from 'sqlite3';
import path from 'path';

class DatabaseConnection {
  private static instance: sqlite3.Database | null = null;

  static getInstance(): sqlite3.Database {
    if (!DatabaseConnection.instance) {
      const dbPath = path.resolve(__dirname, 'database.sqlite');
      DatabaseConnection.instance = new sqlite3.Database(dbPath, (err) => {
        if (err) {
          console.error('Error opening database:', err.message);
        } else {
          console.log('Connected to the SQLite database.');
        }
      });
    }
    return DatabaseConnection.instance;
  }
}

export default DatabaseConnection;

const dbPath = path.resolve(__dirname, 'database.sqlite');
export const db = new sqlite3.Database(dbPath)
