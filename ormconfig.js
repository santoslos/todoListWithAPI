const username = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'example';

module.exports = {
  type: 'postgres',
  host: 'postgresql',
  port: 5432,
  username,
  password,
  database: 'postgres',
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: [__dirname + '/src/**/*.entity.ts', __dirname + '/dist/**/*.entity.js'],
  migrations: ['migrations/**/*.ts'],
  subscribers: ['subscriber/**/*.ts', 'dist/subscriber/**/.js'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
    subscribersDir: 'subscriber',
  },
};
