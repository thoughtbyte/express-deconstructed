const routeHandler = (req, res, next) => {
  console.log(`look at me, im a route handler!! handling: ${req.path}`);

  res.json({ message: `thanks for visiting ${req.path}!` });
};

module.exports = routeHandler;
