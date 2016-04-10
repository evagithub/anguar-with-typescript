module app.tipApp {
interface ITipListModel{
    title: string;
    showDetails: boolean;
    tips: app.domain.ITip[];
    toggleDetails():void;
}

class TipListCtrl implements ITipListModel {
    title: string;
    showDetails: boolean;
    tips: app.domain.ITip[];
    static $inject = ["dataAccessService"];
    constructor(private dataAccessService: app.common.DataAccessService) {
        this.title ="Some Tips";
        this.showDetails = false;
        this.tips = [];
        
        var tipResource = dataAccessService.getTipResource();
        tipResource.query((data: app.domain.ITip[]) =>{
            this.tips = data;
        });
    }
    toggleDetails(): void{
        this.showDetails = !this.showDetails;
    }
}

angular
.module("tipApp")
.controller("TipListCtrl", TipListCtrl);
}
