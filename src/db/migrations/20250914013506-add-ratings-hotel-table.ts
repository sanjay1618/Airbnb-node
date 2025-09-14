import { QueryInterface } from 'sequelize';


module.exports = {
  async up (queryInterface: QueryInterface) {
    
    await queryInterface.sequelize.query(
      `
      ALTER TABLE hotels
      ADD COLUMN rating DECIMAL(3,2) DEFAULT null,
      ADD COLUMN ratings_count INT DEFAULT null
      `
    )
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(
      `
      ALTER TABLE hotels
      DROP COLUMN rating,
      DROP COLUMN ratings_count
      `
    )
   
  }
};
