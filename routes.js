const express = require("express");
const { where } = require("sequelize");
const employeeTable = require("./models").employee;

const router = express.Router();

// router.get("/", function (req, res) {
// //   console.log("Welcome to Node Js api");
//   res.json({
//     status:true,
//     message : "Welcome to Node Js api"
//   })
// });



//Add employee api
router.post("/add-employee", (req, res) => {
  // duplicate email ristriction
  employeeTable
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((data) => {
      if (data) {
        res.json({
          status: false,
          message: "Email already exist",
        });
      } else {
        employeeTable
          .create({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            mobile: req.body.mobile,
          })
          .then((sucess) => {
            res.json({
              status: true,
              message: "Employee created sucessfully",
            });
          })
          .catch((error) => {
            res.json({
              status: false,
              message: "Failed to execute insert query",
            });
          });
      }
    })
    .catch((error) => {
      res.json({
        status:false,
        message: "Failed to execurte insert query"
      });
    });
});

// Get all Employee (GET)
router.post("/list-employee", (req,res) => {
  
})


router.get("/", (req, res) => {
  //   console.log("Welcome to Node Js api");
  res.json({
    status: true,
    message: "Welcome to Node Js api",
  });
});

module.exports = router;
