import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Enseignant } from '../../global/enseignant';

@Component({
    tag: 'supprimer-enseignant',
    styleUrl: 'app-fetch.scss'
})
export class SupprimEnseignant {
  @Prop() match: MatchResults;
  @State() data :any[] = [] ;
  @Prop() history: RouterHistory;
  @State() enseignants : Enseignant;
  @State() apiRootUrl: string = 'https://dosispi.cleverapps.io/enseignants/';
  
  deleteData(ens) {
      fetch("https://dosispi.cleverapps.io/enseignants", {
          method: "DELETE",
          body:JSON.stringify(ens),
          headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "application/json"
          }
        })
  .then(response => response.json());
}

componentWillLoad() {
  let noEnseignant = this.match.params.noEnseignant;

  console.log(this.match.params);
  return fetch(
      "https://dosispi.cleverapps.io/enseignants/" + noEnseignant
  )
      .then(response => response.json())
      .then(data => {
          this.enseignants = data;
          console.log(noEnseignant);
      });
  }

render() {
  return (
      <div>

      <div class="columns is-mobile is-centered">
     
<article class="message is-success ">
<div class="message-header is-mobile is-centered">
<p>Success</p>

</div>
<div class="message-body">
L'Enseignant numéro  <strong>{this.match.params.noEnseignant}</strong>{this.deleteData(this.enseignants)} est suprimé.
</div>
</article>
      </div>)}</div>
  );
}
}