module.exports = (sequelize, DataTypes) => {
  const Personagem = sequelize.define('Personagem', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'personagens',
  });

  return Personagem;
}