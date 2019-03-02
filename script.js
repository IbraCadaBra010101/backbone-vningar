/*** 1a Vi vill bygga en egen, coolare kryssruta än den inbyggda <input type="checkbox"/>.
 Börja med att skapa en modellklass som representerar om kryssrutan är ikryssad (checked) eller inte.
 Ge även modellklassen en egenskap för HTML-innehåll som man ska kunna klicka på för att
 aktivera kryssrutan. Tips: du behöver två egenskaper, som skulle kunna heta checked och htmlContent.

 1b Skapa en vyklass som kan rendera en checkbox-modell. Den behöver kunna producera HTML för en
 klickbar ruta och eventuellt HTML-innehåll. Tips: använd en if-sats för att rendera olika rutor, beroende
 på om checkboxen är ikryssad eller inte.

 1c Skapa instanser av modellklassen och vyklassen.
 Koppla ihop dem så att vyinstansen använder modellinstansen, och lyssnar på förändringar i den.
 Lägg sedan till ett event i vyn för att hantera ett klick. När man klickar i det som vyn renderar ska modellen "togglas",
 dvs om den var ikryssad så ska den bli avkryssad, och tvärtom. Tips: skapa en funktion med namnet "toggle" i modellklassen,
 som kan ändra värdet på egenskapen.

 1d* Varför inte göra samma uppgift med vanilla JavaScript?
 Då kan man jämföra om Backbone gör livet som frontendutvecklare enklare.
 ***/

// <button id="increment-btn-id">Increment</button>
//     <button id="decrement-btn-id">Decrement</button>
//     <div id="output-div-id">0</div>


//
//     const CheckedIsTrueOrFalse = Backbone.Model.extend({
//         defaults: {
//             checkedState: "checked",
//             htmlContent: '' },
//             toggle: function () {
//                 let state = this.get('checkedState');
//                 console.log(state);
//                 if (state === "checked") {
//
//                     this.set({checkedState: 'unchecked'});
//                 } else {
//                    this.set({checkedState:'checked'});
//                 }
//         }
//     });
//
//     const check = new CheckedIsTrueOrFalse({});
//
//
//     const CheckView = Backbone.View.extend({
//         initialize: function () {
//             this.listenTo(this.model, 'change', this.render);
//         },
//         render: function () {
//             const status = this.model.get('checkedState');
//             let html = `<div id="toggle-box-id">${status}
//                            <button id="toggle-btn">Toggle</button>
//                         </div>`;
//             this.$el.html(html);
//         },
//         events: {
//             'click #toggle-btn': "runToggle"
//         },
//         runToggle: function () {
//             this.model.toggle();
//         }
//
//     });
//
//     $(document).ready(function () {
//         let checkview = new CheckView({
//             model:check,
//             el: '#toggle-box-id'
//         });
//         checkview.render();
//
//
//     });
// //
//
//
// //$('#' + id).is(":checkedState")


/**2 Skapa en räknare. Den ska renderas av en vy,
 * som innehåller två knappar och visar ett
 * värde. När man klickar på den ena
 * knappen ska värdet ökas med ett och den
 * andra knappen ska minska värdet.
 * Vyn ska använda en modell för att
 * hålla ordning på värdet.
 **/

//     let Counter = Backbone.Model.extend({
//         defaults: {value: 0},
//
//         inc: function () {
//             this.set({value: this.get('value')+1});
//         },
//         dec: function () {
//             this.set({value: this.get('value')-1});
//         }});
//     let cnt = new Counter();
//
//     let NumberView =  Backbone.View.extend({
//         initialize: function () {
//             this.model.on('change', this.render, this)
//         },
//         events: {
//             'click .plus': 'increment',
//             'click .minus': 'decrement'
//         },
//         render: function(){
//             let html='<span>'+ this.model.get('value')+'</span>';
//             html = '<button class="minus">-</button>'+html;
//             html += '<button class="plus">+</button>';
//             this.$el.html(html);
//
//         },
//         increment: function () {
//             this.model.inc();
//             console.log('test')
//          },
//         decrement: function () {
//             this.model.dec();
//         }});
//     $(document).ready(function () {
//
//         let toggleView = new NumberView({model: cnt,});
//         toggleView.render();
//     $('#app').html(toggleView.el);
//
//
// });

/**3a Skapa en komponent för exakt validering. Den skulle kunna användas för att
 * kontrollera ett lösenord. Du behöver en modellklass med två egenskaper:
 * det användaren skrivit in och vad det korrekta värdet ska vara.
 * Du behöver också en vy,som visar ett textfält och ett meddelande.
 * Användaren ska kunna skriva in en sträng i textfältet. Meddelandet ska tala
 * om huruvida användaren har skrivit rätt värde eller inte.Om användaren
 * skrivit fel ska meddelandet visas med annan formatering.**/


// $(document).ready(function () {
//
//     const Validation = Backbone.Model.extend({
//         defaults: {userInput: '', correctpassword: 'abcd'}
//     });
//
//     let validationModelInstance = new Validation({});
//
//     let ValidationView = Backbone.View.extend({
//         initialize: function () {this.model.on('change', this.render(), this)},
//         events: {'click #submit-btn-id': 'validation'},
//         render: function () {
//             let formHtml = `<form id="validation-form-id">
//                                 <div class="form-group">
//                                     <label for="input-password-id">Password</label>
//                                     <input type="password" class="form-control" id="input-password-id" placeholder="Password">
//                                 </div>
//                                     <button id="submit-btn-id" type="submit" class="btn btn-primary">Submit</button>
//                              </form>`;
//             //    formHtml += ` <div id="resolve-reject-id"></div>`;
//             this.$el.html(formHtml);
//
//         },
//         validation: function () {
//             console.log('test');
//
//             $('#validation-form-id').submit(function () {
//                 let result = document.getElementById('res');
//                 let $inputs = $('#validation-form-id :input');
//                 validationModelInstance.set({userInput: $inputs.val()});
//                 let usr = validationModelInstance.get('userInput');
//
//                 let truePassword = validationModelInstance.get('correctpassword');
//                 if (truePassword === usr) {
//                     result.innerText = 'Success!';
//                     result.style.color = 'green';
//                 } else{
//                     result.innerText ='Failure';
//                     result.style.color ='red';
//                 }
//             })
//         }
//     });
//
//
//     const view1 = new ValidationView({model:validationModelInstance});
//     view1.render();
//     $('#output-div-id').html(view1.el);
// });




















