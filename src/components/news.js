import React, {Component} from 'react';
import Request from 'superagent';



export default class News extends Component {
  constructor() {
    super();
    this.state = {};
  }


  getNews(){
    // Called when the props provided to the component are changed
  }
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page



  }

  componentDidMount() {
    // Called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
    console.log('hello')
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }

  updateSearch() {
  }

  render() {
    return (
      <div>
        <h1>News</h1>
          <h2>Cristiano Ronaldo Blah blah</h2>
          <p>Meh la croix brunch butcher single-origin coffee taxidermy. Pickled next level raw denim vexillologist, street art hexagon brunch hella. Affogato sriracha lo-fi live-edge, raclette wayfarers before they sold out helvetica YOLO street art distillery. Hella craft beer four dollar toast hexagon, vice freegan echo park yuccie brunch vegan messenger bag. Fap hot chicken roof party brunch. Brunch godard bespoke, listicle heirloom crucifix normcore kale chips humblebrag. Aesthetic yr tote bag, salvia listicle bushwick banjo.</p>
          <h2>Leo Messi Blah blah</h2>
          <p>Heirloom venmo typewriter, hell of craft beer small batch food truck messenger bag plaid snackwave woke bitters. Try-hard pour-over glossier, aesthetic small batch authentic kombucha. Ethical fashion axe waistcoat butcher wayfarers, semiotics banjo brunch keffiyeh lumbersexual craft beer locavore letterpress swag. Aesthetic everyday carry forage, 8-bit green juice small batch whatever meggings meditation photo booth lomo. Poutine edison bulb humblebrag, four dollar toast vaporware chillwave pug kitsch tofu pickled air plant hoodie butcher. Air plant tattooed snackwave meditation, af jianbing drinking vinegar fam literally ramps man braid sustainable. Iceland blog before they sold out, sartorial art party meditation fanny pack swag offal austin.</p>

      </div>
    )
  }
}
