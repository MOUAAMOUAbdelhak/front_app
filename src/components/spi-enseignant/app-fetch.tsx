import { Component, Prop ,State, Method} from '@stencil/core';
import { Enseignant } from '../../global/enseignant';

@Component({
  tag: 'app-fetch',
  styleUrl: 'app-fetch.scss'

})
export class AppFetch {

  @State() enseignants :Enseignant[] = [] ;
  @Prop()
   name: string='/fetch/';

  apiRootUrl: string = 'http://api-dosispi.cleverapps.io/enseignants';

  @Method()
  load () {
  
    fetch(`${this.apiRootUrl}`).then(rsp => {
      return   rsp.json();
  
    }).then(data => {
      this.enseignants = data;
  
    }).catch((err) => {
      console.error('Could not load data', err);
    }); 
  }

  componentWillLoad() { 
    console.log('Component is being rendered');

    this.load();
  }
  componentDidLoad() {
    this.load();

    console.log('Component has been rendered');
  }



  render() {
    if(this.enseignants && this.enseignants.length>0) {

      return (
        <div class="columns is-mobile is-centered">
              <table class="table is-responsive">                                  
              <thead>
                <tr>
                   <th>No Enseignant</th>
                   <th>Nom</th>
                   <th>Prenom</th>
                   <th>Email Ubo </th>
                   <th>Mobile</th>
                   <th>Sexe</th>
                   <th>Detail</th>
                   <th>Delete</th>
                   <th>Add</th>
                </tr>
                   </thead>
              { 
                  this.enseignants.map((data:Enseignant) =>
       
      <tbody>
                 <tr>
                    <td> {data.noEnseignant}</td>
                    <td> {data.nom}</td>
                    <td> {data.prenom}</td>
                    <td> {data.emailUbo}</td>
                    <td> {data.mobile}</td>
                    <td> {data.sexe}</td>
                    <td>
                    <stencil-route-link url={'/enseignant/detail/' + data.noEnseignant}>
                    
                      <button class="button is-info is-rounded is-focused is-tooltip-info tooltip" data-tooltip="Plus d'infos"> <i class="fas fa-info-circle"></i> </button>
                    </stencil-route-link>
                    </td>
                    <td>
                    <stencil-route-link url={'/enseignant/delete/' + data.noEnseignant}>
                      <button class="button is-danger is-rounded is-focused is-tooltip-danger tooltip" data-tooltip="Supprimer Enseignant">   <i class="fas fa-trash-alt"></i> </button>
                    </stencil-route-link>
                     </td>
                     <td>
                    <stencil-route-link url={'/enseignant/ajouter/'}>
                      <button class="button is-success is-rounded is-focused is-tooltip-success  tooltip" data-tooltip="Ajouter enseignant">   <i class="fas fa-plus"></i> </button>
                    </stencil-route-link>
                   </td>

                 </tr>
          </tbody>
            )
              }   
         </table> </div>
              )
    }
    else {
   
   return (" Nothing to render ");
   
    } 
   

    
  }
}