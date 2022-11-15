const router = require('express').Router();
const { Category, Product } = require('../../models');

//find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Product.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find a single category
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Product.findByPk(req.params.id,
      {
        include: [{model: Category, through: Product, as: 'product_category'}]
      });
      if (!categoryData) {
        res.status(404).json({
          message: 'No category found with that id' });
          return;
      }
      res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a new category
router.post('/', async (req, res) => {
try {
  const categoryData = await Product.create(req.body);
  res.status(200).json(categoryData);
} catch (err) {
  res.status(400).json(err)
}
});

  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id'});
      return;
    } 
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id'});
      return;
    } 
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;