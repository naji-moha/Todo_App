const Todo = require('./Todo');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { text, time } = req.body;
    const newTodo = await Todo.create({ text, time });
    res.json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { text, time } = req.body;
    const updated = await Todo.update({ text, time }, { where: { id: req.params.id } });
    if (updated[0] === 0) return res.status(404).json({ message: 'Todo not found' });
    const updatedTodo = await Todo.findByPk(req.params.id);
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
