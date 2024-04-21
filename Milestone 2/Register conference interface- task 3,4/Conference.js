class Conference {
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


