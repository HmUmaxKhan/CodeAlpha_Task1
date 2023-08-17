const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");

router.post(
  "/info",
  [
    body("email", "Email must be unique and valid").isEmail(),
    body("name", "name must be greater then two characters").isLength({
      min: 3,
    }),
    body("password", "password must be greater than 5 characters").isLength({
      min: 6,
    }),
    body("phone", "phone number must be 11 characters").isLength({min:11}),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return res.status(400).json({ errors: errors.array() });
    }

    const {name,email,password,fullname,phone,dateOfBirth,
    address,university,semester,skills} = req.body;

    try {
      let user = await User.findOne({email: req.body.email});

      if (user) {
        return res.status(400).json("User already exits");
      }
    
    let user1 = new User({name: name, email:email,password:password,fullname:fullname,phone:phone,dateOfBirth:dateOfBirth,
    address:address,university:university,semester:semester,skills:skills}) 

    await user1.save();
    
    
    res.status(200).json("User is registered Successfuly");
    

    } catch (err) {
      res.status(400).json(err);
    }

  }
);

module.exports = router;
