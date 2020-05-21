module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        "Movie",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: 
            {
            type: DataTypes.STRING,
            allowNull: false
            },
            description: 
            {
            type: DataTypes.STRING,
            allowNull: false
            },
            poster:
            {
            type: DataTypes.STRING,
            allowNull: false
            },
            watched: DataTypes.BOOLEAN,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            deleted_at: DataTypes.DATE,
        },
        {
            paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            
        }
    );

    return Movie;
}