module.exports = (sequelize, DataTypes) => {
  const Funcionario = sequelize.define('Funcionario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cargo: DataTypes.STRING,
    funcao: DataTypes.STRING,
    departamento: DataTypes.STRING,
  });

  Funcionario.associate = (models) => {
    Funcionario.hasMany(models.Ponto, { foreignKey: 'funcionario_id' });
  };

  return Funcionario;
};
