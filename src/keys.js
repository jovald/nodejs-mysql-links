module.exports = {

    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'www',
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || '',
        database: process.env.DATABASE_NAME || 'db_links2'
    }

};