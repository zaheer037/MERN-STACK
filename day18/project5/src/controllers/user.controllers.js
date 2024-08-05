const User = require('../models/user.models.js');
const Dept = require('../models/user1.models.js');
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
  .then(users => {
  res.send(users);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
};
// Create and Save a new User
exports.create = (req, res) => {
// Validate request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Create a new User
const cust = new User({
  uname: req.body.uname,
  udeptid: req.body.udeptid
});
// Save user in the database
cust.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new user."
});
});
};
// Find a single User with a id
exports.findOne = (req, res) => {
  User.findById(req.params.id)
  .then(cust => {
  if(!cust) {
   return res.status(404).send({
   message: "User not found with id " + req.params.id
 });
}
 res.send(cust);
}).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "User not found with id " + req.params.id
  });
}
return res.status(500).send({
  message: "Error getting user with id " + req.params.id
});
});
};
// Update a User identified by the id in the request
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Find user and update it with the request body
User.findByIdAndUpdate(req.params.id, {
  cid: req.body.cid,
  cadhaar: req.body.cadhaar,
  cpan: req.body.cpan,
  cdob:req.body.cdob
}, {new: true})
.then(cust => {
 if(!cust) {
   return res.status(404).send({
   message: "user not found with id " + req.params.id
 });
}
res.send(cust);
}).catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Error updating user with id " + req.params.id
});
});
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  User.findById(req.params.id)
.then(cust => {
if(!cust) {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
res.send({message: "user deleted successfully!"});
}).catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
};

// Create and Save a new User
exports.chalapathicreate = (req, res) => {
  // Validate request
  if(!req.body) {
    return res.status(400).send({
    message: "Please fill all required field"
  });
  }
  // Create a new User
  const cust = new Dept({
    dname: req.body.dname,
    deptid: req.body.deptid
  });
  // Save user in the database
  cust.save()
    .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
    message: err.message || "Something went wrong while creating new user."
  });
  });
  };

  exports.chalapathiJoin = (req, res) => {
    const userId = req.params.id;
  
    User.aggregate([
      {
        $lookup: {
          from: 'Dept',
          localField: 'udeptid',
          foreignField: 'deptid',
          as: 'deptInfo'  // Renamed for clarity
        }
      }
    ])
    .then(result => {
      if (!result || result.length === 0) {
        return res.status(404).send({
          message: "User not found with id " + userId
        });
      }
      res.send(result);  // Send the actual joined result
    })
    .catch(err => {
      console.error(err); // Log the error for debugging
      return res.status(500).send({
        message: "Could not join user with id " + userId
      });
    });
  };