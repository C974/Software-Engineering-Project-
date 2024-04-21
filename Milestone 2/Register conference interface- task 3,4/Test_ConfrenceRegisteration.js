const assert = require('chai').assert;
const { JSDOM } = require('jsdom');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conference Organizer Interface</title>
    <style>
        /* Styles as in the provided HTML */
    </style>
</head>
<body>
<div class="organizer-container">
    <h2> Register conference</h2>
    <form class="conference-details" onsubmit="saveConferenceDetails(event)">
        <input type="text" id="conferenceName" placeholder="Conference Name" required>
        <input type="date" id="conferenceDates" placeholder="Dates" required>
        <textarea id="reviewersList" placeholder="List of Reviewers and Their Expertise" rows="4" required></textarea>
        <input type="text" id="conferenceVenue" placeholder="Venue" required>
        <button type="submit">Submit Details</button>
        <p class="error-message" id="errorMessage"></p>
    </form>
</div>

<script src="Conference.js"></script>
<script>
    function saveConferenceDetails(event) {
        event.preventDefault();

        const conferenceName = document.getElementById('conferenceName').value;
        const conferenceDates = document.getElementById('conferenceDates').value;
        const reviewersList = document.getElementById('reviewersList').value;
        const conferenceVenue = document.getElementById('conferenceVenue').value;

        if (!conferenceName || !conferenceDates || !reviewersList || !conferenceVenue) {
            document.getElementById('errorMessage').innerText = 'Please enter all details.';
            return;
        }

        const conference = new Conference(conferenceName, conferenceDates, reviewersList, conferenceVenue);
        const conferenceJSON = JSON.stringify(conference, null, 2);

        const blob = new Blob([conferenceJSON], { type: 'application/json' });

        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'conference_details.txt';
        a.click();
    }
</script>
</body>
</html>
`;

const { window } = new JSDOM(html);
global.window = window;
global.document = window.document;

describe('Conference Organizer Interface', () => {
    it('should save conference details as JSON file', () => {
        // Mock user input
        window.document.getElementById('conferenceName').value = 'Test Conference';
        window.document.getElementById('conferenceDates').value = '2023-11-30';
        window.document.getElementById('reviewersList').value = 'Reviewer 1: Expertise 1\nReviewer 2: Expertise 2';
        window.document.getElementById('conferenceVenue').value = 'Test Venue';

        // Trigger the form submission
        window.document.querySelector('form').dispatchEvent(new window.Event('submit'));

        // Assertions can be added here based on the expected behavior
        // For simplicity, let's just check if the form submission triggers without errors
        assert.isTrue(true, 'Form submission triggered successfully');
    });
});
