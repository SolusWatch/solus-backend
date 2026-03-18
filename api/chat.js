// api/chat.js
export default async function handler(req, res) {
  // Only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { user_id, query, show_title, answer_length } = req.body;

    // Validation
    if (!user_id || !query) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // TODO: In Phase 2, add:
    // - Check subscription status
    // - Call Claude API
    // - Call ElevenLabs for voice
    // - Log query to database
    // - Return response

    // For now, return demo response
    return res.status(200).json({
      success: true,
      answer: `Demo answer to: "${query}" about ${show_title}`,
      audio_url: null,
      queries_remaining: 10
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
