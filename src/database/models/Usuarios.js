module.exports = function (sequelize, dataTypes) {
  const nombre = 'Usuarios';
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
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
  };
  const config = { tableName: nombre, timestamps: false };

  const Usuario = sequelize.define(nombre, cols, config);

  Usuario.associate = function (models) {
    Usuario.hasOne(models.Carros, {
      as: 'carros',
      foreignKey: 'comprador',
    });
  };
  return Usuario;
};


