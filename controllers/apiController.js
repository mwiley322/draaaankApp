function index(req, res) {
  res.json({
    message: 'Welcome to Draaaank! Get your drank on!',
    documentation_url: 'https://github.com/mwiley322/draaaankApp',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      },
      {
        method: 'GET', path: '/api/drinks', description: 'Lists all drinks within the database'
      },
      {
        method: 'GET', path: '/api/drinks/:id', description: 'Gets a single drink based on parameters'
      },
      {
        method: 'POST', path: '/api/drinks', description: 'Creates a single new drink'
      },
      {
        method: 'POST', path: '/api/drinks/:id', description: 'Updates a single existing drink'
      },
      {
        method: 'DELETE', path: '/api/drinks/:id', description: 'Destroys a single drink from the database'
      }
    ]
  });
}

module.exports = {index: index};
