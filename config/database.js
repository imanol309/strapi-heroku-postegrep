module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5000),
        database: env('DATABASE_NAME', 'bank'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'luffy85pro'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
