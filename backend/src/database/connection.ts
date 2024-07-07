import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

interface Row {
    id: number;
    info: string;
}

export function connect() {

    db.serialize(() => {
        db.run("CREATE TABLE Employee (info TEXT)");

        const statement = db.prepare("INSERT INTO Employee VALUES (?)");
        for (let i = 0; i < 10; i++) {
            statement.run("Employee " + i);
        }
        statement.finalize();

        db.each("SELECT rowid AS id, info FROM Employee", (err, row: Row) => {
            console.log(row.info);
        });
    });

    db.close();
}

