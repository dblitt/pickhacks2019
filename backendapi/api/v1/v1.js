const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../../models/user.js');
const DailyCheckIn = require('../../models/dailycheckin.js');

// const isNumeric = value => /^-{0,1}\d+$/.test(value);

const validateEmail = email => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

const validateISO8601 = date => /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/.test(date);

router.get('/', (req, res, next) => {
  res.json({
    'success': true,
    'message': 'You shouldn\'t be here...'
  });
});

router.get('/logout', (req, res, next) => {
  req.session.loggedIn = false;
  res.status(200).json({});
});

router.post('/auth', (req, res, next) => {
  // if already logged in, redirect to dashboard
  if (req.session.loggedIn) {
    // if (req.session.userType === 'student') {
    res.status(200).json({
      success: true,
      loggedIn: true
      // redirectTo: studentLoginSuccessRedirect
    });
    // } else if (req.session.userType === 'admin') {
    //   res.status(200).json({
    //     success: true,
    //     loggedIn: true,
    //     userType: 'admin',
    //     redirectTo: '/admin'
    //   });
    // } else {
    //   // unknown user_type
    //   req.session.loggedIn = false;
    //   res.status(200).json({
    //     success: true,
    //     loggedIn: false,
    //     redirectTo: '/login'
    //   });
    // }
  } else {
    if (req.body.email && req.body.password) {
      User.find({
        email: req.body.email
      }).then(doc => {
        if (doc.length > 0 && doc[0].password) {
          bcrypt.compare(req.body.password, doc[0].password, (err, result) => {
            if (result) {
              req.session.email = doc[0].email;
              // req.session.userType = doc[0].user_type;
              req.session.firstName = doc[0].firstName;
              req.session.lastName = doc[0].lastName;
              req.session.loggedIn = true;
              req.session.userID = doc[0]._id;
              // console.log(doc[0]);
              // if (doc[0].user_type === 'student') {
              //   res.status(200).json({
              //     success: true,
              //     loggedIn: true,
              //     userType: 'student',
              //     redirectTo: studentLoginSuccessRedirect
              //   });
              // } else if (doc[0].user_type === 'admin') {
              //   res.status(200).json({
              //     success: true,
              //     loggedIn: true,
              //     userType: 'admin',
              //     redirectTo: '/admin'
              //   });
              // }
              res.status(200).json({
                success: true,
                loggedIn: true
              });
            } else {
              // Login fail due to incorrect password
              req.session.loggedIn = false;
              res.status(200).json({
                success: true,
                loggedIn: false,
                message: 'Login unsuccessful: unknown email or password',
                redirectTo: '/login'
              });
            }
            if (err) {
              console.error(err);
              req.session.loggedIn = false;
              res.status(500).json({
                success: false,
                loggedIn: false,
                error: 'Internal server error',
                redirectTo: '/login'
              });
            }
          });
        } else {
          // No user
          req.session.loggedIn = false;
          res.status(200).json({
            success: true,
            loggedIn: false,
            message: 'Login unsuccessful: unknown email or password',
            redirectTo: '/login'
          });
        }
      });
    } else {
      // correct body not supplied
      res.status(400).json({
        success: false,
        loggedIn: false,
        error: 'Correct body not supplied',
        redirectTo: '/login'
      });
    }
  }
});

router.post('/register', (req, res, next) => {
  if (req.session.loggedIn) {
    res.status(200).json({
      success: true,
      registered: false,
      loggedIn: true
    });
  } else {
    if (req.body.email && req.body.firstName && req.body.lastName && req.body.sex && req.body.password && req.body.passwordConfirm) {
      // validation
      if (validateEmail(req.body.email) && req.body.password === req.body.passwordConfirm && (req.body.sex === 'male' || req.body.sex === 'female')) {
        // check if user with email exists
        User.find({
          email: req.body.email
        }).then(doc => {
          if (doc.length > 0) {
            // user already exists
            res.status(200).json({
              success: true,
              registered: false,
              loggedIn: false,
              error: 'User already exists'
            });
          } else {
            // create user in database
            // hash password
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if (err) {
                console.error(err);
                res.status(500).json({
                  success: false,
                  registered: false,
                  loggedIn: false,
                  error: 'Internal server error'
                });
              } else {
                // put user in database
                const newUser = new User({
                  email: req.body.email,
                  password: hash,
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  sex: req.body.sex
                  // student_id: req.body.studentId,
                  // grad_year: req.body.studentId.slice(0, 4),
                  // user_type: 'student'
                });
                newUser.save().then(doc => {
                  // user creation successful
                  req.session.loggedIn = true;
                  req.session.email = req.body.email;
                  req.session.firstName = req.body.firstName;
                  req.session.lastName = req.body.lastName;
                  // req.session.userType = 'student';
                  req.session.userID = doc._id;
                  // console.log(req.session.userID)
                  // console.log(typeof req.session.userID)
                  res.status(200).json({
                    success: true,
                    registered: true,
                    loggedIn: true
                    // redirectTo: studentLoginSuccessRedirect
                  });
                  // console.log(doc)
                  // after the user is saved, send a slack invite to the email
                  // request.post({
                  //   url: 'https://sluhhackclub.slack.com/api/users.admin.invite',
                  //   form: {
                  //     email: req.body.email,
                  //     token: process.env.SLACK_OAUTH,
                  //     set_active: true
                  //   }
                  // }, (error, httpResponse, body) => {
                  //   if (error) {
                  //     console.error(error);
                  //   } /* begin segment to delete */ else {
                  //     body = JSON.parse(body);
                  //     if (body.ok) {
                  //       console.log('Invite sent to ' + req.body.email);
                  //     } else if (body.error === 'already_invited' || body.error === 'already_in_team' || body.error === 'user_disabled') {
                  //       // console.log('Already in workspace');
                  //     } else {
                  //       console.error('Slack invite error: ');
                  //       console.error(body);
                  //     }
                  //   }
                  // });
                }).catch(err => {
                  console.error(err);
                  res.status(500).json({
                    success: false,
                    registered: false,
                    loggedIn: false,
                    error: 'Internal server error',
                    redirectTo: '/register'
                  });
                });
              }
            });
          }
        });
      } else {
        res.status(200).json({
          success: false,
          registered: false,
          loggedIn: false,
          error: 'Validation error',
          redirectTo: '/register'
        });
      }
    } else {
      // missing fields, bad request
      res.status(400).json({
        success: false,
        registered: false,
        loggedIn: false,
        error: 'Correct body not supplied',
        redirectTo: '/register'
      });
    }
  }
});

function handleBadRequest (req, res, next, redirectTo) {
  res.status(400).json({
    success: false,
    error: 'Correct body not supplied',
    redirectTo: redirectTo
  });
}

const dailyCheckInRequiredBody = [
  {
    name: 'date',
    type: 'string'
  },
  {
    name: 'age',
    type: 'number'
  },
  {
    name: 'weightInPounds',
    type: 'number'
  },
  {
    name: 'heightInInches',
    type: 'number'
  },
  {
    name: 'hoursSleep',
    type: 'number'
  },
  {
    name: 'servingsFruit',
    type: 'number'
  },
  {
    name: 'servingsVegetables',
    type: 'number'
  },
  {
    name: 'servingsDairy',
    type: 'number'
  },
  {
    name: 'glassesWater',
    type: 'number'
  },
  {
    name: 'gramsProtein',
    type: 'number'
  },
  {
    name: 'hoursWorkedOut',
    type: 'number'
  },
  {
    name: 'weightLiftedInPounds',
    type: 'number'
  }
];

router.post('/dailycheckin', (req, res, next) => {
  if (req.session.loggedIn && typeof req.session.userID === 'string') {
    let stillGoodReq = true;
    dailyCheckInRequiredBody.forEach(object => {
      if (typeof req.body[object.name] !== object.type) { /* eslint valid-typeof: "off" */
        stillGoodReq = false;
      }
    });
    if (stillGoodReq) {
      if (validateISO8601(req.body.date)) {
        const newDate = new Date(req.body.date);
        newDate.setUTCHours(0, 0, 0, 0);
        DailyCheckIn.countDocuments({ date: newDate }, (err, docCount) => {
          if (err) {
            console.error(err);
            const error = new Error('Internal server error');
            error.status = 500;
            next(error);
          } else {
            if (docCount > 0) {
              // already made a check in for the day
              res.status(200).json({
                success: false,
                message: 'Check in exists for that day'
              });
            } else {
              // we will save the doc to the db
              const newDocument = new DailyCheckIn({
                date: newDate,
                userID: req.session.userID,
                weightInPounds: req.body.weightInPounds,
                heightInInches: req.body.heightInInches,
                hoursSleep: req.body.hoursSleep,
                age: req.body.age,
                servingsFruit: req.body.servingsFruit,
                servingsVegetables: req.body.servingsVegetables,
                servingsDairy: req.body.servingsDairy,
                glassesWater: req.body.glassesWater,
                gramsProtein: req.body.gramsProtein,
                hoursWorkedOut: req.body.hoursWorkedOut,
                weightLiftedInPounds: req.body.weightLiftedInPounds
              });
              newDocument.save((err, checkIn) => {
                if (err) {
                  console.error(err);
                  const error = new Error('Internal server error');
                  error.status = 500;
                  next(error);
                } else {
                  res.status(200).json({
                    success: true
                  });
                }
              });
            }
          }
        });
      } else {
        handleBadRequest(req, res, next, '/idk');
      }
    } else {
      handleBadRequest(req, res, next, '/idk');
    }
  } else {
    const error = new Error('Not authorized');
    error.status = 401;
    next(error);
  }
});

// Must keep at end of file
router.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    success: false,
    error: error.message || 'Internal server error',
    loggedIn: req.session.loggedIn || false
  });
});

module.exports = router;
