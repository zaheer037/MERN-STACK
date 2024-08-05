const User = require('../models/user.models.js');
const User2=require('../models/user2.models.js');

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
  cname: req.body.cname,
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
exports.chalapathiJoin=(req,res)=>{
  User.lookup({ 
    from: 'dept', 
    localField: 'deptid', foreignField: 'udeptid', 
    as: 'uname'
}).exec((error, result) => { 
    if (error) { 
        console.log('error - ', error); 
  
    } else { 
        console.log('result - ', result[0]); 
    } 
})
}
return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
};