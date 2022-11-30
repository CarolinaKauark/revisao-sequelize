module.exports = (sequelize, DataTypes) => {
  const Temporada = sequelize.define('Temporada', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
    },
    temporada: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'temporadas', // mesmo nome da migration (tabela)
  });

  Temporada.associate = (models) => {
    Temporada.hasMany(models.Episodio, {
      foreignKey: 'temporadaId', as: 'episodios'
    });
  }

  return Temporada;
}