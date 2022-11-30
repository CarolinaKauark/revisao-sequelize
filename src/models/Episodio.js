module.exports = (sequelize, DataTypes) => {
  const Episodio = sequelize.define('Episodio', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    titulo: DataTypes.STRING,
    dataDeLancamento: DataTypes.DATE,
    temporadaId: DataTypes.INTEGER,
  }, 
  {
    timestamps: false,
    underscored: true, // dataDeLancamento => data_de_lancamento
    tableName: 'episodios',
  });

  Episodio.associate = (models) => {
    Episodio.belongsTo(models.Temporada, {
      foreignKey: 'temporadaId', as: 'temporada'
    });
  }
  
  return Episodio;
};
