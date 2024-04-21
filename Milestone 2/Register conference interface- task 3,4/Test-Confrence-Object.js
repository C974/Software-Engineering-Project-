const assert = require('chai').assert;

class Conference{
    constructor(name, dates, reviewersList, venue) {
        this.name = name;
        this.dates = dates;
        this.reviewersList = reviewersList;
        this.venue = venue;
    }

    // Getters
    getName() {
        return this.name;
    }

    getDates() {
        return this.dates;
    }

    getReviewersList() {
        return this.reviewersList;
    }

    getVenue() {
        return this.venue;
    }

    // Setters
    setName(name) {
        this.name = name;
    }

    setDates(dates) {
        this.dates = dates;
    }

    setReviewersList(reviewersList) {
        this.reviewersList = reviewersList;
    }

    setVenue(venue) {
        this.venue = venue;
    }
}

describe('Conference Class', () => {
    it('should create a new Conference object with the given properties', () => {
        const conference = new Conference('Test Conference', '2023-11-30', 'Reviewer 1: Expertise 1', 'Test Venue');

        assert.strictEqual(conference.getName(), 'Test Conference');
        assert.strictEqual(conference.getDates(), '2023-11-30');
        assert.strictEqual(conference.getReviewersList(), 'Reviewer 1: Expertise 1');
        assert.strictEqual(conference.getVenue(), 'Test Venue');
    });

    it('should update the properties of the Conference object using setters', () => {
        const conference = new Conference('', '', '', '');

        conference.setName('Updated Conference Name');
        conference.setDates('2023-12-01');
        conference.setReviewersList('Reviewer 2: Expertise 2');
        conference.setVenue('Updated Venue');

        assert.strictEqual(conference.getName(), 'Updated Conference Name');
        assert.strictEqual(conference.getDates(), '2023-12-01');
        assert.strictEqual(conference.getReviewersList(), 'Reviewer 2: Expertise 2');
        assert.strictEqual(conference.getVenue(), 'Updated Venue');
    });
});
