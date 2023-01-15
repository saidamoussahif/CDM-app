const express = require('express');
const { getReleveBancaires, createReleveBancaire,
     updateReleveBancaire,
 } = require('./../Controllers/ReleveBancairesControllers');

const router= express.Router();


router.route('/getReleveBancaires').get(getReleveBancaires);
router.route('/create').post(createReleveBancaire);
router.route('/:id').put(updateReleveBancaire);





module.exports = router;