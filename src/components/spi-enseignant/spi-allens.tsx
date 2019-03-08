import { Component, Prop, State, Method } from "@stencil/core";
import { Enseignant } from '../../global/enseignant';


@Component({
    tag: "spi-allens",
    styleUrl: 'app-fetch.scss'
})
export class spi {
    state = { show: false };

    showModal = () => {
        this.state = { show: true };
    };
    hideModal = () => {
        this.state = { show: false };
    };

    @State() enseignants: Enseignant[] = [];
    @State() item: any = [];
    @State() item1: Enseignant[] = [];
    @State() item2: any = [];
    //@State() item1 : any  = [];
    InputEmail: HTMLInputElement;
    @Prop()
    name: string = '/fetch/';

    apiRootUrl: string = 'https://api-dosispi.cleverapps.io/enseignants';

    @Method()
    load() {

        fetch(`${this.apiRootUrl}`).then(rsp => {
            return rsp.json();

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
    handleClick() {

    }
    showpopup(num) {
        let t1 = document.getElementById("myModal");
        t1.classList.toggle("is-active");
        console.log(num);
        let url = 'https://api-dosispi.cleverapps.io/enseignants/'
        return fetch(url + num)
            .then(response => response.json())
            .then(data => {
                this.item = data;
                console.log(this.item.noEnseignant);
            });

    }
    hidepopup() {
        let t1 = document.getElementById("myModal");
        t1.classList.remove("is-active");

    }



    showpopupdelet(enseignant) {
        console.log(enseignant);
        let t1 = document.getElementById("modeledelete");
        t1.classList.toggle("is-active");
        fetch("https://api-dosispi.cleverapps.io/enseignants", {
            method: "DELETE",
            body: JSON.stringify(enseignant),
            headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json());
        console.log()

    }

    hidepopupdelete() {
        let t1 = document.getElementById("modeledelete");
        t1.classList.remove("is-active");
        location.href = '/enseignant';
    }
    search(input) {

        if (input == 0) {
            alert('remplissez le champ');
        }
        else {
            //console.log(input);
            let url = 'https://api-dosispi.cleverapps.io/enseignants/nom/' + input
            let url1 = 'https://api-dosispi.cleverapps.io/enseignants/emailUbo/' + input

            console.log(url1)
            console.log(url)

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.item1 = data;
                });
                if (this.item1.length != 0) {
                   // alert('hiii');
                   console.log(this.item1[0])
                   this.showpopup(this.item1[0].noEnseignant); 
                }
                else{
            fetch(url1)
                .then(response => response.json())
                .then(data => {
                    this.item2 = data;
                });

                if(this.item2.length ==0){
                    //alert('hi2'); 
                    alert('enseignant n\'existe pas');
                }
                else{
                    console.log(this.item2)
                    this.showpopup(this.item2.noEnseignant); 
                   
                }
            
           

            }
        }
           
/*
            else if (this.item2.length == 0) {
                alert('test3');
                //this.item1.map((data:Enseignant)=>data.noEnseignant[0]);
                     console.log(this.item1[0].noEnseignant)
                // this.item1.map((data:Enseignant)=>this.showpopup(data.noEnseignant));
                //this.item1.map((data:Enseignant)=>data.noEnseignant[0]);
                //this.showpopup(this.item1[0].noEnseignant);   
            }
            else if (this.item1.length == 0 && this.item2.length == 0) {
                alert('test2');
                // this.showpopup(this.item2[0].noEnseignant); 
            }
        }*/

    }


    render() {


        return (




            <div class="marginn">

                <div class="field is-grouped is-pulled-right ">


                    <div class="control">
                        <input class="input is-info is-rounded" type="text" ref={(el: HTMLInputElement) => this.InputEmail = el} placeholder="Enter the name or email" />
                    </div>
                    <div class="control">
                        <button class="button is-info is-rounded is-focused is-tooltip-info  tooltip" onClick={() => this.search(this.InputEmail.value)} data-tooltip="Recherche par nom ou email">  <i class="fas fa-search"></i></button>


                    </div>
                    <p class="control is-pulled-right">
                        <stencil-route-link url={'/enseignant/ajouter/'}>
                            <button class="button is-success is-rounded is-focused is-tooltip-success  tooltip" data-tooltip="Ajouter enseignant">   <i class="fas fa-plus"></i> </button>
                        </stencil-route-link>
                    </p>

                </div>
                <br></br>



                <div class="marg">




                    {this.enseignants.map((data: Enseignant) =>




                        <div class="pricing-table">
                            <div class="pricing-plan">
                                <div class="plan-header">


                                    <div class="field is-grouped is-pulled-right ">
                                        <p class="control">

                                            <button class="button is-info is-rounded is-focused is-tooltip-info tooltip" onClick={() => this.showpopup(data.noEnseignant)} data-tooltip="Plus d'infos"> <i class="fas fa-info-circle"></i> </button>

                                        </p>
                                        <p class="control">

                                            <button class="button is-danger is-rounded is-focused is-tooltip-danger tooltip" onClick={() => this.showpopupdelet(data)} data-tooltip="Supprimer Enseignant">   <i class="fas fa-trash-alt"></i> </button>

                                        </p>
                                    </div>
                                </div>
                                <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"> </span>{data.nom} {data.prenom}</span></div>
                                <div class="plan-items">
                                    <div class="plan-item">{data.emailUbo}</div>
                                    <div class="plan-item">{data.mobile}</div>
                                    <div class="plan-item">{data.pays}</div>
                                    <div class="plan-item">{data.ville}</div>
                                </div>

                            </div>

                        </div>

                    )
                    }
                </div>
                <div id="myModal" class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">

                        <div class="field is-grouped is-pulled-right ">
                            <button onClick={this.hidepopup.bind(this)} id="myBtn" class="button is-info is-rounded is-focused is-tooltip-danger tooltip  is-tooltip-left" data-tooltip="close"><i class="far fa-times-circle"></i></button>
                        </div>

                        <section class="hero sp">
                            <div class="wrap">
                                <article>
                                    <br></br>
                                    <div>
                                        <div class="columns is-mobile is-centered">
                                            <strong id="upper" >{this.item.nom} {this.item.prenom}</strong>
                                        </div>
                                        <p>
                                            <b>Gender:</b> {this.item.sexe}<br></br>
                                            <b>Email UBO: </b> {this.item.emailUbo}<br></br>
                                            <b>Email Prso :</b> {this.item.emailPerso}<br></br>
                                            <b>Adresse</b>: {this.item.adresse} <b>CP</b> {this.item.codePostal}<br></br>
                                            <b>Ville</b>: {this.item.ville}<br></br>
                                            <b>Pays</b>: {this.item.pays}<br></br>
                                            <b>Mobile</b>: {this.item.mobile}<br></br>
                                            <b>telephone</b>: {this.item.telephone} <br />
                                            <b>Type</b>: {this.item.type}<br />
                                        </p>
                                    </div>
                                </article>







                            </div>
                        </section>

                    </div>

                </div>




                <div id="modeledelete" class="modal">
                    <div class="modal-background"></div>
                    <div id="modal-content1" class="modal-content">

                        <div class="field is-grouped is-pulled-right ">
                            <button onClick={this.hidepopupdelete.bind(this)} id="myBtn" class="button is-info is-rounded is-focused is-tooltip-danger tooltip  is-tooltip-left" data-tooltip="close"><i class="far fa-times-circle"></i></button>
                        </div>

                        <section class="hero sp">
                            <div class="wrap">
                                <article>
                                    <br></br>
                                    <div>
                                        <div class="columns is-mobile is-centered">
                                            <p>L'Enseignant<b  ></b> est supprimé.</p>
                                        </div>

                                    </div>
                                </article>
                            </div>
                        </section>

                    </div>

                </div>

            </div>
        );


    }


}


