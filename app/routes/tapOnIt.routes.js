module.exports = app => {
    const tapOnIts = require("../controllers/tapOnIt.controller.js");
  
    var router = require("express").Router();
  
    
    router.post("/", tapOnIts.create);
  
    
    router.get("/", tapOnIts.findAll);
  
    
    router.get("/published", tapOnIts.findAllPublished);
  
    
    router.get("/:id", tapOnIts.findOne);
  
    
    router.put("/:id", tapOnIts.update);
  
    
    router.delete("/:id", tapOnIts.delete);
  
    // Delete all Tutorials
    router.delete("/", tapOnIts.deleteAll);
  
    app.use('/api/tapOnIts', router);
  };