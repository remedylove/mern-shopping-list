const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get All items
//@access Public
router.get('/', (req, res) => {
    Item.find({})
        .sort({ date: -1})
        .then(items => res.json(items));
});

//@route POST api/items
//@desc Create An Item
//@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });

    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc  Delete An Item
//@access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true })))
        .catch(err => res.status(404).json({success: false}));
});

router.put('/:id', (req, res) =>    {
    
    const doneItem = {
        done: req.body.done
    }

    Item.findByIdAndUpdate(
        req.params.id,
        doneItem,
        (err) =>   {
            if (err)    {
                res.json({
                    sucess: false
                })
            }
        }
    ).then(doneItem => res.json(doneItem));
});

module.exports = router;