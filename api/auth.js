// api/auth.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { user_id } = req.query;

    if (!user_id) {
      return res.status(400).json({ error: 'Missing user_id' });
    }

    // TODO: In Phase 2, add:
    // - Check user subscription from database
    // - Check daily query limit
    // - Return actual subscription status

    // For now, return demo response
    return res.status(200).json({
      user_id: user_id,
      tier: 'free',
      queries_remaining: 5,
      subscription_valid: true,
      expires_at: new Date(Date.now() + 30 * 86400000)
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
