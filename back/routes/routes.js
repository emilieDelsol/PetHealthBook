const express = require('express');
const router = express.Router();
const controller = require('./../controllers/controllers');


router.get('/all-reports', controller.getAllReports);
router.post('/addReport', controller.addReport);
router.delete('/delete/:id', controller.deleteOneReportByID);


module.exports = router;