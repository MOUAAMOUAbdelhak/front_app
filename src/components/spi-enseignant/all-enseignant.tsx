import { Component, State, Prop } from "@stencil/core";

import { MatchResults, RouterHistory } from "@stencil/router";

@Component({
  tag: "all-enseignant",
  styleUrl: "app-fetch.scss"
})
export class SpiEnseignant {

  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  @State() item : any  = [];

componentWillLoad() {
    let id = this.match.params.noEnseignant;
    console.log(id);
    return fetch("http://api-dosispi.cleverapps.io/enseignants/"+id)
      .then(response => response.json())
      .then(data => {
        this.item = data;});
  }





  render() {
  

        return (
          <div class="columns is-mobile is-centered">
                <table class="table is-responsive">                                  
                <thead>
                  <tr>
                     <th>No Enseignant</th>
                     <th>Nom</th>
                     <th>Prenom</th>
                     <th>Email Ubo</th>
                     <th>telephone</th>
                     <th>Mobile</th>
                     <th>Sexe</th>
                   
                  </tr>
                     </thead>
                { 
                   
         
        <tbody>
                   <tr>
                      <td> {this.item.noEnseignant}</td>
                      <td> {this.item.nom}</td>
                      <td> {this.item.prenom}</td>
                      <td> {this.item.emailUbo}</td>
                      <td>{this.item.telephone}</td>
                      <td> {this.item.mobile}</td>
                      <td> {this.item.sexe}</td>
                   
  
                   </tr>
            </tbody>
              
                }   
           </table> </div>
                )
      }
      
    
  }

