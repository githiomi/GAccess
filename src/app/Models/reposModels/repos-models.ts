export class ReposModels {

   showRepoDetails : boolean;

   constructor(public repoName : any,
               public repoLink : any,
               public repoDescription : any,
               public repoDateCreated : Date){

                  this.showRepoDetails = false;
               }
}
