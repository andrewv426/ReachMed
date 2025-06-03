const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Handle intake form submission
exports.submitIntakeForm = async (req, res, next) => {
  try {
    const {
      mainSymptom,
      painLevel,
      duration,
      otherSymptoms,
      medications,
      medicalHistory,
      visualIndicators
    } = req.body;

    // Validate all fields are present
    if ([mainSymptom, painLevel, duration, otherSymptoms, medications, medicalHistory, visualIndicators].some(f => !f)) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const form = await prisma.intakeForm.create({
      data: {
        mainSymptom,
        painLevel,
        duration,
        otherSymptoms,
        medications,
        medicalHistory,
        visualIndicators
      },
    });
    res.status(201).json(form);
  } catch (err) {
    next(err);
  }
};
