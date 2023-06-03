const Plan = require('../model/Plan');

// Create a new plan
exports.createPlan = async (planData) => {
  try {
    const newPlan = new Plan(planData);
    const savedPlan = await newPlan.save();
    return savedPlan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all plans
exports.getPlans = async () => {
  try {
    const plans = await Plan.find();
    return plans;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a plan
exports.updatePlan = async (id, planData) => {
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(id, planData, { new: true });
    return updatedPlan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a plan
exports.deletePlan = async (id) => {
  try {
    const deletedPlan = await Plan.findByIdAndDelete(id);
    return deletedPlan;
  } catch (error) {
    throw new Error(error.message);
  }
};
