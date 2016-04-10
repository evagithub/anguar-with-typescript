var app;
(function (app) {
    var domain;
    (function (domain) {
        var Tip = (function () {
            function Tip(//public tipId: number,
                name, shortDescription, description, image, rating //,
                ) {
                this.name = name;
                this.shortDescription = shortDescription;
                this.description = description;
                this.image = image;
                this.rating = rating;
            }
            return Tip;
        }());
        domain.Tip = Tip;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
