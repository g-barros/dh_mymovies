module.exports = {
  up: (queryInterface, Sequelize) => { 
      return queryInterface.createTable('movies', 
      { 
        id: 
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: 
        {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: 
        {
          type: Sequelize.STRING,
          allowNull: false
        },
        poster:
        {
          type: Sequelize.STRING,
          allowNull: false
        },
        watched: Sequelize.BOOLEAN,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE,
      });    
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.dropTable('movies');    
  }
};
