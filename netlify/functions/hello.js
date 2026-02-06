// Função Hello - Endpoint simples de teste
export default async (req) => {
  const url = new URL(req.url);
  const name = url.searchParams.get('name') || 'Google Antigravity';

  return new Response(JSON.stringify({ 
    message: `Hello from ${name}!`,
    timestamp: new Date().toISOString(),
    endpoint: '/hello'
  }), {
    status: 200,
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
