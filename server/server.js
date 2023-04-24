
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db = require("./config/db");
//C O R S     helps in sending crossplatform information lije from frontend to backend
app.use(cors());
app.use(express.json());


/////////////////////S E R V E R   P O R T SETUP///////////////
const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR STUDENTS//////////////

app.get("/students", (req, res) => {
  db.query("SELECT * FROM studentdetails", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//////////////////GET REQUEST TO SHOW/READ DATA FOR COMPANIES//////////////

app.get("/companies", (req, res) => {
  db.query("SELECT * FROM companydetails", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//////////////////GET REQUEST TO SHOW/READ DATA FOR PLACEMENTS//////////

app.get("/placements", (req, res) => {
  db.query("SELECT * FROM updateddrive", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// ***************************************************************//////////
//////////////////ROUTE FOR REGISTERATION /////////////
app.post("/register", (req, res) => {
  const usn = req.body.usn;
  const pass = req.body.pass;

  db.query(
    "INSERT INTO slogin (usn,pass) VALUES (?,?)",
    [usn, pass],

    (err, result) => {
      if (err) {
        console.log(err);

        res.send({ err: err });
        return;
      }
      if (result.length) {
        res.send(result);
      } else {
        res.send({ message: "already exists" });
      }
    }
  );
});

/////////////////////ROUTE FOR LOGIN /////////////
app.post("/login", (req, res) => {
  const usn = req.body.usn;
  const pass = req.body.pass;

  db.query(
    "SELECT * FROM slogin WHERE usn = ? AND pass = ?",
    [usn, pass],
    (err, result) => {
      if (err) {
    
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination" });
      }
    }
  );
});

/////////////////////ROUTE FOR ADMIN LOGIN /////////////
app.post("/admin", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  db.query(
    "SELECT * FROM alogin WHERE email = ? AND pass = ?",
    [email, pass],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination" });
      }
    }
  );
});



/////////////////////ROUTE FOR STAFF LOGIN /////////////
app.post("/staff", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  db.query(
    "SELECT * FROM staff_login WHERE 	staff_mail = ? AND staff_pass = ?",
    [email, pass],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination" });
      }
    }
  );
});

/////////////////////ROUTE FOR ADD COMPANIES /////////////
app.post("/addcompany", (req, res) => {
  const cname = req.body.cname;
  const crequiredskills = req.body.crequiredskills;
  const email = req.body.email;
  const phone = req.body.phone;
  const website = req.body.website;
  const jloc = req.body.jloc;
  const package = req.body.package;
  const mincgpa = req.body.mincgpa;
  const position = req.body.position;

  db.query(
    "INSERT INTO companydetails (cname,crequiredskills,email,phone,website,jloc,package,mincgpa,position) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      cname,
      crequiredskills,
      email,
      phone,
      website,
      jloc,
      package,
      mincgpa,
      position,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result.length) {
        res.send(result);
      } else {
        res.send({ message: "already exists" });
      }
    }
  );
});



/////////////////////ROUTE FOR UPDATE COMPANY /////////////
app.post("/updateCompany", (req, res) => {
  db.query("UPDATE `companydetails` SET ? WHERE `companydetails`.`email` = ? ",
    [{
       cname : req.body.cname,
       crequiredskills : req.body.crequiredskills,
       email : req.body.email,
       phone : req.body.phone,
       website : req.body.website,
       jloc : req.body.jloc,
       package : req.body.package,
       mincgpa : req.body.mincgpa,
       position : req.body.position,
    },req.body.email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Updated" });
      }
    }
  );
});



/////////////////////ROUTE FOR Delete Company /////////////
app.post("/companyDelete", (req, res) => {
  const id = req.body.id;
  db.query(
    "DELETE FROM `companydetails` WHERE  `companydetails`.`id` = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Deleted", result : result });
      }
    }
  );
});


/////////////////////ROUTE FOR ADD PLACEMENTS /////////////
app.post("/addplacement", (req, res) => {
  const sname = req.body.sname;
  const usn = req.body.usn;
  const batch = req.body.batch;
  // const cgpa = req.body.cgpa;
  const cname = req.body.cname;
  const pdate = req.body.pdate;
  const package = req.body.package;
  const position = req.body.position;

  db.query(
    "INSERT INTO updateddrive (sname,usn,batch,cname,pdate,package,position) VALUES (?,?,?,?,?,?,?)",
    [sname, usn, batch, cname, pdate, package, position],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
        // res.send({ message: "Wrong username/password combination" });
      }
      if (result.length) {
        res.send(result);
      } else {
        res.send({ message: "already exists" });
      }
    }
  );
});

/////////////////////ROUTE FOR ADD STUDENTS /////////////
app.post("/addstudents", (req, res) => {
  const sname = req.body.sname;
  const usn = req.body.usn;
  const sskills = req.body.sskills;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const dob = req.body.dob;
  const branch = req.body.branch;
  const cgpa = req.body.cgpa;

  db.query(
    "INSERT INTO studentdetails (sname,usn,sskills,mobile,email,dob,branch,cgpa) VALUES (?,?,?,?,?,?,?,?)",
    [sname, usn,sskills, mobile, email, dob, branch, cgpa],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
        // res.send({ message: "Wrong username/password combination" });
      }
      if (result.length) {
        res.send(result);
      } else {
        res.send({ message: "already exists" });
      }
    }
  );
});



/////////////////////ROUTE FOR UPDATE STUDENTS /////////////
app.post("/updateStudents", (req, res) => {
  db.query("UPDATE `studentdetails` SET ? WHERE `studentdetails`.`usn` = ? ",
    [{
       sname :req.body.sname,
       sskills:req.body.sskills,
       mobile : req.body.mobile,
       email : req.body.email,
       dob : req.body.dob,
       branch : req.body.branch,
       cgpa : req.body.cgpa,
    },req.body.usn],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Deleted" });
      }
    }
  );
});




/////////////////////ROUTE FOR Delete STUDENTS /////////////
app.post("/studentDelete", (req, res) => {
  const usn = req.body.usn;
  db.query(
    "DELETE FROM `studentdetails` WHERE  `studentdetails`.`usn` = ?",
    [usn],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Deleted", result : result });
      }
    }
  );
});


//////////////////GET REQUEST TO SHOW/READ DATA FOR UserProfile//////////

app.get("/profile", (req, res) => {
  db.query(
    "SELECT sl.usn,sd.sname,sd.mobile,sd.email,sd.dob,sd.branch,sd.cgpa FROM slogin AS sl INNER JOIN studentdetails AS sd ON sl.usn = sd.usn;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


//////////////////GET REQUEST TO SHOW/READ DATA FOR UserProfile//////////

app.post("/getprofile", (req, res) => {
  db.query(
    "SELECT sl.usn,sd.sname,sd.mobile,sd.email,sd.dob,sd.branch,sd.cgpa FROM slogin AS sl INNER JOIN studentdetails AS sd ON sl.usn = sd.usn;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/getprofile", (req, res) => {
  const usn = req.body.usn;
  db.query(
    "SELECT * FROM `studentdetails` WHERE `usn` = ?",
    [usn],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});







//////////////////GET REQUEST TO SHOW/READ DATA FOR AdminProfile//////////

app.get("/adminprofile", (req, res) => {
  db.query(
    "SELECT al.email,ad.aname,ad.phone,ad.depname FROM alogin AS al INNER JOIN admindetails AS ad ON al.email = ad.email;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



// //////////////////GET REQUEST TO SHOW/READ DATA FOR AdminProfile//////////

// app.get("/staffprofile", (req, res) => {
//   db.query(
//     "SELECT al.email,ad.aname,ad.phone,ad.depname FROM alogin AS al INNER JOIN admindetails AS ad ON al.email = ad.email;",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });


// //////////////////GET QUIZ API//////////
// app.get('/quiz', (req, res) => {
  
//     // Execute the query to get all quiz questions and answers
//     db.query('SELECT * FROM quiz_questions', (err, results) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal server error');
//         return;
//       }

//       // Send the quiz questions and answers as a JSON response
//       res.json(results);
//     });

// });

app.get('/quiz', (req, res) => {
  
  // Execute the query to get all quiz questions and answers
  db.query('SELECT * FROM quiz_questions', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    // Transform the data into the desired format
    const formattedResults = results.map(result => {
      return {
        question: result.question,
        answers: [result.answer_1, result.answer_2, result.answer_3, result.answer_4],
        correct: result.correct_answer
      }
    })

    // Send the formatted quiz questions and answers as a JSON response
    res.json(formattedResults);
  });

});




// define the API route for inserting a new question
// app.post('/questions', (req, res) => {
//   const question = req.body.question;
//   const answers = req.body.answers;
//   const correct = req.body.correct;

//   // insert the new question into the database
//   db.query('INSERT INTO quiz_questions (question, answers, correct) VALUES (?, ?, ?)', [question, answers, correct], (err, results) => {
//     if (err) {
//       console.error('Error inserting the question into the database: ' + err.stack);
//       res.status(500).send('Error inserting the question into the database.');
//       return;
//     }
//     console.log('Question inserted into the database with ID ' + results.insertId);
//     res.status(201).json({ message: 'Question inserted into the database.' });
//   });
// });


app.post('/questions', (req, res) => {
  const { question, answers, correct } = req.body;

  const insertQuestionQuery = `INSERT INTO quiz_questions (question, answer_1, answer_2, answer_3, answer_4, correct_answer)
                               VALUES (?, ?, ?, ?, ?, ?)`;

  const values = [question, answers[0], answers[1], answers[2], answers[3], correct];

  db.query(insertQuestionQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting question into database: ', err);
      res.status(500).send('Error inserting question into database');
      return;
    }

    console.log('Question inserted successfully with ID: ', result.insertId);

    res.status(201).json({
      message: 'Question inserted successfully',
      questionId: result.insertId
    });
  });
  
});

app.get('/get_my_companies', (req, res) => {
  const id = req.query.id;

  const skillsQuery = `SELECT sskills FROM studentdetails WHERE usn = '${id}'`;


  db.query(skillsQuery, (err, skillsResult) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    const skills = skillsResult[0].sskills;

    console.log(skills)

    const companiesQuery = `SELECT * FROM companydetails WHERE crequiredskills LIKE '%${skills}%' `;

    db.query(companiesQuery, (err, companiesResult) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }

      res.send(companiesResult);
    });
  });
});

function levenshteinDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));
  
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  
  return dp[m][n];
}

function isSimilar(str1, str2, threshold) {
  const distance = levenshteinDistance(str1, str2);
  return distance <= threshold;
}

app.get('/get_my_companies_ml', (req, res) => {
  const id = req.query.id;
  const threshold = 1; // Set the similarity threshold here

  const skillsQuery = `SELECT sskills FROM studentdetails WHERE usn = '${id}'`;

  db.query(skillsQuery, (err, skillsResult) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    const skills = skillsResult[0].sskills;

    console.log(skills);

    const companiesQuery = `SELECT * FROM companydetails`;

    db.query(companiesQuery, (err, companiesResult) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }

      const matchingCompanies = companiesResult.filter((company) => {
        const requiredSkills = company.crequiredskills;
        const isMatch = requiredSkills.split(',').some((skill) => {
          return isSimilar(skill.trim(), skills.trim(), threshold);
        });
        return isMatch;
      });

      res.send(matchingCompanies);
   });
  });
});

// // route to handle GET requests from the frontend
// app.get('/predictions', (req, res) => {
//   const studentId = req.params.studentId;

//   // query the database to get the required skills of each company
//   db.query('SELECT id, crequiredskills FROM companydetails', (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send({ error: 'Failed to get company details' });
//       return;
//     }

//     // create an array to store the training data
//     const trainingData = [];

//     // loop through the results and add them to the training data array
//     for (let i = 0; i < results.length; i++) {
//       const row = results[i];
//       const requiredSkills = row.crequiredskills.split(',').map(skill => skill.trim());
//       trainingData.push({
//         id: row.id,
//         input: requiredSkills,
//         output: [1] // 1 means the company requires these skills
//       });
//     }

//     // query the database to get the skills of the student
//     db.query('SELECT sskills FROM studentdetails WHERE stid = ?', [studentId], (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send({ error: 'Failed to get student skills' });
//         return;
//       }

//       // extract the skills of the student from the database results
//       const studentSkills = results[0].sskills.split(',').map(skill => skill.trim());

//       // create an array to store the results
//       const predictions = [];

//       // create a logistic regression model using the training data
//       const model = new logisticRegression(trainingData);

//       // predict whether the student is applicable for each company
//       for (let j = 0; j < trainingData.length; j++) {
//         const companyId = trainingData[j].id;
//         const requiredSkills = trainingData[j].input;
//         const isRequired = trainingData[j].output[0];

//         // check if the student's skills match the required skills of the company
//         const prediction = model.predict(studentSkills) > 0.5;
//         if (prediction === isRequired) {
//           predictions.push({
//             companyId: companyId
//           });
//         }
//       }

//       // send the predictions as a JSON response to the frontend
//       res.send(predictions);
//     });
//   });
// });

// app.get('/companies', (req, res) => {
//   const studentId = req.params.stid;
//     console.log('hi')
//   // Retrieve the student's skills from the studentdetails table
//   const studentSkillsQuery = `SELECT sskills FROM studentdetails WHERE stid = ${studentId}`;
//   db.query(studentSkillsQuery, (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error retrieving student skills');
//       return;
//     }

//     const studentSkills = results[0].sskills;

//     // Retrieve the company names that require the student's skills from the companydetails table
//     const companyNamesQuery = `SELECT cname FROM companydetails WHERE crequiredskills LIKE '%${studentSkills}%'`;
//     db.query(companyNamesQuery, (err, results) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error retrieving company names');
//         return;
//       }

//       const companyNames = results.map(result => result.cname);

//       res.send(companyNames);
//     });
//   });
// });

