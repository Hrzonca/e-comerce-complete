const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//GET all tags
router.get('/', async (req, res) => {
  try {
  const tagData = await Tag.findAll({
    include: [
      {model: Product}
    ],
  });
  res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find one product tag
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      inculde: [{ model: Product}]
    });

     if (!tagData) {
      res.status(404).json({ message: 'No product found with that id' });
      return;
     }
     res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

//TODO fix function for value
//ask in office hours 
// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update({
    where: {
      id: req.params.id,
    }
    });

    if (!tagData[0]) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;