module.exports = {
    dialect: "postgres",
    url: "postgresql://postgres:gksekyufOmGpqzFXNCvXyrKpTfVbuEJc@postgres.railway.internal:5432/railway",
    define: {
        timestamps: "true",
        underscored: "true",
        underscoredAll: "true"
    },

    sequelize: new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        pool: {
          max: 10,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        dialectOptions: {
          connectTimeout: 60000
        }
      }),
}

