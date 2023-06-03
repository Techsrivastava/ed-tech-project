const express = require('express');
const planController = require('../controller/PlanController');

const router = express.Router();

// Create a new plan
router.post('/plans', planController.createPlan);

// Get all plans
router.get('/plans', planController.getPlans);

// Update a plan
router.put('/plans/:id', planController.updatePlan);

// Delete a plan
router.delete('/plans/:id', planController.deletePlan);

module.exports = router;
