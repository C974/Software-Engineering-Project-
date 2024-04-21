// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
//
// const app = express();
// const PORT = process.env.PORT || 3000;
//
// // Middleware to parse JSON requests
// app.use(bodyParser.json());
//
// // Endpoint to handle conference registration
// app.post('/registerConference', (req, res) => {
//     const conferenceDetails = req.body;
//
//     // Convert conference details to a string
//     const conferenceString = `
// Conference Name: ${conferenceDetails.conferenceName}
// Dates: ${conferenceDetails.conferenceDates}
// Reviewers List: ${conferenceDetails.reviewersList}
// Venue: ${conferenceDetails.conferenceVenue}
// `;
//
//     // Save the conference details to a text file
//     fs.writeFile('conference_details.txt', conferenceString, (err) => {
//         if (err) {
//             console.error('Error saving conference details:', err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             res.status(200).send('Conference registered successfully!');
//         }
//     });
// });
//
// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
//
// const app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(bodyParser.json());
//
// app.post('/registerConference', (req, res) => {
//     const conferenceDetails = req.body;
//
//     const conferenceString = `
// Conference Name: ${conferenceDetails.conferenceName}
// Dates: ${conferenceDetails.conferenceDates}
// Reviewers List: ${conferenceDetails.reviewersList}
// Venue: ${conferenceDetails.conferenceVenue}
// `;
//
//     fs.writeFile('conference_details.txt', conferenceString, (err) => {
//         if (err) {
//             console.error('Error saving conference details:', err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             res.status(200).send('Conference registered successfully!');
//         }
//     });
// });
//
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
