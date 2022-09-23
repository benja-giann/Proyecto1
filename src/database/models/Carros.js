module.exports = function (sequelize, dataTypes) {
  const nombre = 'Carros';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING,
    },
    descuento: { type: dataTypes.STRING },
    precio: { type: dataTypes.INTEGER },
    'ficha-tecnica': { type: dataTypes.STRING(1000) },
    marca: { type: dataTypes.STRING },
    comprador: { type: dataTypes.INTEGER },
  };
  const config = { tableName: nombre, timestamps: false };

  const Carro = sequelize.define(nombre, cols, config);

  Carro.associate = function (models) {
    Carro.belongsTo(models.Usuarios, {
      as: 'usuarios',
      foreignKey: 'comprador',
    });
  };

  return Carro;
};
