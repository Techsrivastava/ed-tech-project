const planService = require('../services/PlanService');

// Create a new plan
exports.createPlan = async (req, res) => {
  const { category, planName, price, timeLimit, access } = req.body;
  const planData = { category, planName, price, timeLimit, access };

  try {
    const newPlan = await planService.createPlan(planData);
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all plans
exports.getPlans = async (req, res) => {
  try {
    const plans = await planService.getPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a plan
exports.updatePlan = async (req, res) => {
  const { id } = req.params;
  const { category, planName, price, timeLimit, access } = req.body;
  const planData = { category, planName, price, timeLimit, access };

  try {
    const updatedPlan = await planService.updatePlan(id, planData);
    if (!updatedPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a plan
exports.deletePlan = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlan = await planService.deletePlan(id);
    if (!deletedPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.status(200).json({ message: 'Plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
