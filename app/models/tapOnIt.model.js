module.exports = (sequelize, Sequelize) => {
    const TapOnIt = sequelize.define("tapOnIt", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return TapOnIt ;
  };