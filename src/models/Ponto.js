module.exports = (sequelize, DataTypes) => {
  const Ponto = sequelize.define('Ponto', {
    tipo: {
      type: DataTypes.ENUM('entrada', 'saida'),
      allowNull: false,
    },
    data_hora: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    foto: DataTypes.STRING,
    assinatura: DataTypes.STRING,
  });

  Ponto.associate = (models) => {
    Ponto.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id' });
  };

  return Ponto;
};
