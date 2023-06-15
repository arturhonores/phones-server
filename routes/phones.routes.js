const router = require("express").Router();
const phonesData = require('../data/phones.json')

router.get("/getAllPhones", (req, res, next) => {
  res.json(phonesData);
});

router.get("/getPhone/:id", (req, res, next) => {
  const { id } = req.params
  const phoneId = Number(id)
  const phone = phonesData.find(phone => phone.id === phoneId)
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: 'Phone not found.' });
  }
})

module.exports = router;