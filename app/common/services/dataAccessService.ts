module app.common{
    interface IDataAccessService{
        getTipResource():ng.resource.IResourceClass<ITipResource>;
    }
    interface ITipResource 
    extends ng.resource.IResource<app.domain.ITip>{
        
    }
    
   export class DataAccessService
		implements IDataAccessService {

		static $inject = ["$resource"];
		constructor(private $resource: ng.resource.IResourceService) {

		}

		getTipResource(): ng.resource.IResourceClass<ITipResource> {
			return this.$resource("/api/tips/:tipId");
		}
	}
	angular
    .module("common.services")
    .service("dataAccessService",
              DataAccessService);
}