import { Component } from "@stencil/core";

@Component({
  tag: "spi-candidat",
  styleUrl: "spi-candidat.scss"
})
export class SpiCandidat {



    

  getens(){
    let t1 = document.getElementById("myModal");
    t1.classList.toggle("is-active");

}
getens2(){
    let t1 = document.getElementById("myModal");
    t1.classList.remove("is-active");
    //t1.classList.toggle("is-clipped ");
}
 
  
  render() {
    return (
     
      <div  class="candidat">
      <button onClick={this.getens.bind(this)} id="myBtn" >Open Modal</button>


      <div id="myModal" class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
   
    <div class="field is-grouped is-pulled-right ">
    <button onClick={this.getens2.bind(this)} id="myBtn"  class="button is-info is-rounded is-focused is-tooltip-danger tooltip  is-tooltip-left" data-tooltip="close"><i class="far fa-times-circle"></i></button>
    </div>

    <section class="hero sp">
<div class="wrap">
	<article>
<br></br>
		<div>
    <div class="columns is-mobile is-centered">
			<strong id="upper" >nom prenom</strong>
    </div>
			<p>
      <b>Gender:</b>: Deutsch LA, Google, SAP Labs LLC<br></br>
      <b>Email UBO</b>: Work &amp; Co.<br></br>
      <b>Email Prso :</b>: Deutsch LA, Google, SAP Labs LLC<br></br>
			<b>Email Prso :</b>: Deutsch LA, Google, SAP Labs LLC<br></br>
			<b>Adresse:</b>: Interaxon Inc, <b>CP</b> Cogapp<br></br>
			<b>Ville</b>: Method, Cantina, UberConference<br></br>
			<b>Pays</b>: 10,000FT,Swiftkey,Qardio,Mullen/Mark Boroyan<br></br>
			<b>Mobile</b>: Virginia Tech students<br></br>
			<b>telephone</b>: American Express, Eventbrite, UX Vision, SAP Ireland <br/>
      <b>Type</b>: American Express, Eventbrite, UX Vision, SAP Ireland <br/>
			</p>
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
