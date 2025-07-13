const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const emp = require('../controllers/employeeController');

router.get('/', auth, emp.getAll);
router.get('/:id', auth, emp.getOne);
router.post('/', auth, emp.create);
router.put('/:id', auth, emp.update);
router.delete('/:id', auth, emp.remove);

module.exports = router;
