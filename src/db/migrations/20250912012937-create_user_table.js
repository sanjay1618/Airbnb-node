'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS hotels(
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      address VARCHAR(256) NOT NULL,
      location VARCHAR(256) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );`)
  },

  async down (queryInterface) {
    
  }
};
