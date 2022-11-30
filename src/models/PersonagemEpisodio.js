module.exports = (sequelize, DataTypes) => {
  const PersonagemEpisodio = sequelize.define('PersonagemEpisodio', {
    personagemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    episodioId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
  },
},
  {
    timestamps: false,
    tableName: 'personagens_episodios',
    underscored: true,
  });

  PersonagemEpisodio.associate = (models) => {
    models.Episodio.belongsToMany(models.Personagem, {
      through: PersonagemEpisodio,
      foreignKey: "episodioId", //model de fora
      otherKey: 'personagemId', // model de dentro
      as: 'Personagem',
    });

    models.Personagem.belongsToMany(models.Episodio, {
      through: PersonagemEpisodio,
      foreignKey: "personagemId", //model de fora
      otherKey: 'episodioId', // model de dentro
      as: 'episodio',
    });
  }

  return PersonagemEpisodio;

};