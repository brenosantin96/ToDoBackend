const express = require ('express');
const router = express.Router();
const TodosController = require('../controllers/TodosController');

router.get("/", TodosController.Todoindex);
router.get("/:id", TodosController.TodogetItem);
router.post("/", TodosController.Todopost);
router.put("/:id", TodosController.Todoatualizar);
router.delete("/:id", TodosController.TododeleteItem);

module.exports = router;

//os middlewares possuem o endereço como primeiro parametro,
//os middlewares possuem oque fazer com request e response como segundo parametro
