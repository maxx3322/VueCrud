const db = require("../models");
const TapOnIt = db.tapOnIts;
const Op = db.Sequelize.Op; 

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;

}

const tapOnIt = {
    title: req.body.title, 
    description: req.body.description, 
    published: req.body.published ? req.body.published : false

}; 

TapOnIt.create(tapOnIt)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the tapOnIt."
  });
});
};



exports.findAll = (req, res) => {
    const title = req.query.title; 
    var condition = title ? {title: { [Op.like]: '%${title}%'} } : null;
    TapOnIt.findAll({where:condition})
    .then(data => {
        res.send(data); 
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving TapOnIt."
        }); 
    }); 


}; 

exports.findOne = (req, res) => {
    const id = req.params.id;

    TapOnIt.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving TapOnIt with id=" + id
        });
      });
  };






    exports.update = (req, res) => {
        const id = req.params.id;
      
        TapOnIt.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "TapOnIt was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update TapOnIT with id=${id}. Maybe TapOnIt was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating TapOnIt with id=" + id
            });
          });
      };
  




    exports.delete = (req, res) => {
        const id = req.params.id;
      
        TapOnIt.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "TapOnIt was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete TapOnIt with id=${id}. Maybe TapOnIt was not found!`
              });
            }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete TapOnIt with id=" + id
          });
        });
    };
  





    exports.deleteAll = (req, res) => {
        TapOnIt.destroy({
          where: {},
          truncate: false
        })
          .then(nums => {
            res.send({ message: `${nums} TapOnIt were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing all TapOnIts."
            });
          });
      };
    
  






    exports.findAllPublished = (req, res) => {
        TapOnIt.findAll({ where: { published: true } })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving TapOnIt."
            });
          });
        };
    
  
