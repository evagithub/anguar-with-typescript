var app;
(function (app) {
    var tipApp;
    (function (tipApp) {
        var TipListCtrl = (function () {
            function TipListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Some Tips";
                this.showDetails = false;
                this.tips = [];
                var tipResource = dataAccessService.getTipResource();
                tipResource.query(function (data) {
                    _this.tips = data;
                });
            }
            TipListCtrl.prototype.toggleDetails = function () {
                this.showDetails = !this.showDetails;
            };
            TipListCtrl.$inject = ["dataAccessService"];
            return TipListCtrl;
        }());
        angular
            .module("tipApp")
            .controller("TipListCtrl", TipListCtrl);
    })(tipApp = app.tipApp || (app.tipApp = {}));
})(app || (app = {}));
