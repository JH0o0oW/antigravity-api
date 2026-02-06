// Função Data - Retorna dados de exemplo
export default async (req) => {
  const sampleData = [
    { id: 1, name: 'Google Antigravity', type: 'IDE', status: 'active' },
    { id: 2, name: 'Gemini 3 Pro', type: 'AI Model', status: 'active' },
    { id: 3, name: 'Netlify Functions', type: 'Serverless', status: 'deployed' }
  ];

  return new Response(JSON.stringify({ 
    success: true,
    data: sampleData,
    count: sampleData.length,
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
