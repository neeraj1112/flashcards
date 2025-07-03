const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');
const classifySubject = require('../utils/subjects');

// Add flashcard
router.post('/flashcard', async (req, res) => {
  try {
    const { student_id, question, answer } = req.body;
    const subject = classifySubject(question + ' ' + answer);

    const flashcard = new Flashcard({ student_id, question, answer, subject });
    await flashcard.save();

    res.json({ message: 'Flashcard added successfully', subject });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get mixed flashcards
router.get('/get-subject', async (req, res) => {
  try {
    const { student_id, limit = 5 } = req.query;

    const allCards = await Flashcard.find({ student_id });
    const grouped = {};

    allCards.forEach(card => {
      if (!grouped[card.subject]) grouped[card.subject] = [];
      grouped[card.subject].push(card);
    });

    let result = [];
    const subjectPools = Object.values(grouped);

    while (result.length < limit && subjectPools.length > 0) {
      for (let i = 0; i < subjectPools.length; i++) {
        if (subjectPools[i].length) {
          result.push(subjectPools[i].pop());
          if (result.length === Number(limit)) break;
        }
      }
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
