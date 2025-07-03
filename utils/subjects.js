function classifySubject(text) {
    const lower = text.toLowerCase();
  
    const keywords = {
      Physics: ['newton', 'force', 'mass', 'acceleration', 'velocity', 'gravity', 'motion', 'energy', 'momentum', 'friction', 'law of motion'],
      Chemistry: ['atom', 'molecule', 'reaction', 'acid', 'base', 'compound', 'bond', 'electron', 'chemical', 'element', 'solution'],
      Biology: ['photosynthesis', 'cell', 'organism', 'evolution', 'dna', 'genetics', 'enzyme', 'respiration', 'plant', 'animal', 'bacteria'],
      Math: ['equation', 'algebra', 'geometry', 'calculus', 'probability', 'function', 'integer', 'matrix', 'integration', 'derivative'],
      History: ['war', 'king', 'empire', 'revolution', 'ancient', 'civilization', 'battle', 'independence', 'freedom', 'dynasty'],
      Geography: ['continent', 'river', 'mountain', 'climate', 'ocean', 'desert', 'glacier', 'forest', 'island', 'plateau'],
      ComputerScience: ['algorithm', 'data', 'program', 'loop', 'variable', 'function', 'code', 'software', 'hardware', 'database', 'AI', 'machine learning'],
      English: ['grammar', 'sentence', 'noun', 'verb', 'poem', 'adjective', 'pronoun', 'paragraph', 'tense', 'literature']
    };
  
    for (let subject in keywords) {
      if (keywords[subject].some(word => lower.includes(word))) {
        return subject;
      }
    }
  
    return 'General';
  }
  
  module.exports = classifySubject;
  