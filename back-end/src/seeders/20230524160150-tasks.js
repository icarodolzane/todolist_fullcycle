module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tasks',
      [{
        description: 'Fazer mercado...',
        check: true
      },
      {
        description: 'Cortar o cabelo...',
        check: false
      },
      {
        description: 'Limpar a casa...',
        check: false
      },
      {
        description: 'Enviar email para fulano...',
        check: true
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};