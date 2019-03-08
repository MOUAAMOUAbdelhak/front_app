import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="spi-enseignant" exact={true}/>
              <stencil-route url="/formation" component="spi-home" exact={true} />
              <stencil-route url="/candidat" component="spi-candidat" exact={true} />
              <stencil-route url="/enseignant" component="spi-enseignant" exact={true} />
              <stencil-route url='/enseignant/detail/:noEnseignant' component='all-enseignant' exact={true} />
              <stencil-route url='/enseignant/delete/:noEnseignant' component='supprimer-enseignant' exact={true} />
              <stencil-route url='/enseignant/ajouter/' component='ajouter-enseignant' exact={true} />
              <stencil-route url='/enseignant/allens' component='spi-allens' exact={true} />
            
              
       
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
