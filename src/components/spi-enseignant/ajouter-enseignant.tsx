import { Component, State, Prop } from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
    tag: 'ajouter-enseignant',
    styleUrl: 'app-fetch.scss'

})
export class AjouterEnseignant {
  
    @State() adresse : String ;
  @State() codePostal : String ;
  @State() emailPerso : String ;
  @State() emailUbo : String ;
  @State() mobile : String ;
  @State() nom : String ;
  @State() pays : String ;
  @State() prenom : String ;
  @State() sexe : String;
  @State() telephone : String ;
  @State() type : String ;
  @State() ville : String ;
  @State() selectValue: string;
  
    @Prop() home : RouterHistory;

    reculer(){
       this.home.location;
      }

  postArticle(ens) {
    ens.preventDefault();
    console.log("!");
    
    const adresse = this.adresse;
  const codePostal = this.codePostal ;
  const emailPerso=this.emailPerso;
  const emailUbo=this.emailUbo;
  const mobile=this.mobile;
  const nom=this.nom;
  const pays=this.pays;
  const prenom=this.prenom;
  const sexe=this.sexe;
  const telephone=this.telephone;
  const type=this.type;
  const ville=this.ville;
    
    const payload = {
   
      adresse,
      codePostal,
      emailPerso,
      emailUbo,
      mobile,
      nom,
      pays,
      prenom,
      sexe,
      telephone,
      type,
      ville
    };
   
    

    fetch("http://api-dosispi.cleverapps.io/enseignants", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) { 
        location.href='/enseignant/allens';
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

  componentWillLoad() {
    this.render();
  }
  
    render() {
        return (
          
          <form>
        


<div class="columns is-multiline is-mobile"> 

          <div class="column is-half">
          
          <input type="text" placeholder="Nom enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.nom = e.target.value)}/>
          <br></br><br></br>
          <input type="text" placeholder="Prenom enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.prenom = e.target.value)}/>

      <br></br><br></br>
          <input type="email" placeholder="Email personel enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.emailPerso = e.target.value)}/>
          <br></br><br></br>    
       <input type="email" placeholder="Email UBO enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.emailUbo = e.target.value)}/>
       <br></br><br></br>
       <input type="tel" placeholder="mobile enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.mobile = e.target.value)}/>
       <br></br><br></br>
       <input type="text" placeholder="pays enseignant..." class="input is-primary is-rounded"  onInput={(e: any) => (this.pays = e.target.value)}/>
          
      <br></br><br></br>
          
  </div>
  <div class="column is-half">
         
          <input type="tel" placeholder="Teléphone enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.telephone = e.target.value)}/>
          <br></br><br></br>
          <input type="text" placeholder="type enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.type = e.target.value)}/>
          <br></br><br></br>
        
          <input type="text"
                  placeholder="Adresse postale..."  class="input is-primary is-rounded"
                  onInput={(e: any) => (this.adresse = e.target.value)}
                />
          <br></br><br></br>
          <input type="text" placeholder="Code postale..."  class="input is-primary is-rounded"  onInput={(e: any) => (this.codePostal = e.target.value)}/>
          <br></br><br></br>
         
          <input type="text" placeholder="ville enseignant..." class="input is-primary is-rounded" onInput={(e: any) => (this.ville = e.target.value)}/>
          <br></br><br></br>
          <div title="This is my tooltip">
          <div class="select is-primary is-rounded" >
          <select  onInput={(e: any) => (this.sexe = e.target.value)} >
         <option value="">select valuse</option> 
        <option value="H" >H</option>
        <option value="F" >F</option>
        <option value="A">Autres</option>
      </select>
      </div>
         </div>
          <br></br><br></br>
          </div>

          
         
 </div> 
 <div class="field is-grouped is-grouped-centered">
  <p class="control">
    <button onClick={this.postArticle.bind(this)} class="button is-success ">Submit</button>
  </p>
  <p class="control">
  <button type="reset" value="Vider les champs"  class="button is-light is-tooltip-danger tooltip is-tooltip-multiline" data-tooltip="en cliquant sur le bouton tout les champs seront vides" > Reset </button>
   
  </p>
</div>

  </form>
  
  
      
        );
    }
}