import { LitElement, html, css } from 'lit'

export class AboutView extends LitElement {

  static properties = {
    isDesktop: { type: Boolean },
    isIpad: { type: Boolean },
    isPhone: { type: Boolean },
    srcImg1: { type: String },
    srcImg2: { type: String }
  };

  constructor() {
    super()
    this.isDesktop = true
    this.isIpad = false
    this.isPhone = false
    this.srcImg1 = ''
    this.srcImg2 = ''
  }

  static styles = css`

      .flex {
        display: flex
      }

      .flex-at {
        align-items: center
      }

      .flex-jc {
        justify-content: space-around
      }

      .flex-jcsb {
        justify-content: space-between
      }

      .flex-jcsa {
        justify-content: space-around
      }

      .flex-jccc {
        justify-content: space-around
      }

      .flex-wrap {
        flex-wrap: wrap
      }

    .main {
        height: calc(100vh - 7.2rem - 8.438rem);
        width: 100;
        background-color: var(--secondary);
        overflow-y: auto
      }

    @media only screen and (min-width: 834px) {
      .grid {
        display: grid;
        grid-template-rows: [uno] auto [dos] auto [tres];
        grid-template-columns: [uno] 100% [dos];
        grid-template-areas:
          'historia'
          'caracteristicas';
        gap: 0.5rem
      }

      .about {
        width: 85%;
        height: 100%;
        margin: 0rem auto
      }

      .texto {
        width: 75%;
        height: 10rem
      }

      img#personal {
        display: block;
        width: 210px;
        height: 180px;
        border-radius: 20rem;
        box-shadow: 0 0 5px rgba(0, 0, 0, .8)
      }

      img#languajes {
        display: block;
        width: 220px;
        height: 220px;
        filter: drop-shadow(0 0 .5px rgba(0, 0, 0, .8))
      }
      
      h2 {
        color: var(--background);
        margin-bottom: 1.5rem
      }

      p {
        color: var(--background);
        line-height: 1.6
      }
    }
    
    @media only screen and (min-width: 430px) and (max-width: 842px) {

      .grid {
        display: grid;
        grid-template-rows: [uno] auto [dos] auto [tres];
        grid-template-columns: [uno] 100% [dos];
        grid-template-areas:
          'historia'
          'caracteristicas';
        gap: 0.5rem
      }

      .about {
        width: 95%;
        height: 100%;
        margin: 0rem auto
      }

      .texto {
        width: 75%;
        height: 10rem
      }

      img#personal {
        width: 210px;
        height: 180px;
        border-radius: 20rem;
        box-shadow: 0 0 5px rgba(0, 0, 0, .8)
      }

      img#languajes {
        width: 220px;
        height: 220px;
        filter: drop-shadow(0 0 .5px rgba(0, 0, 0, .8))
      }
      
      h2 {
        color: var(--background);
        margin-bottom: 1rem
      }

      p {
        color: var(--background);
        line-height: 1.6
      }

      .padding {
        padding-top: 2rem
      }

      .m-img {
        margin-top: 4rem
      }

      .p-w {
        width: 30rem
      }

    }

    @media only screen and (max-width: 428px) {

      .historia {
        width: 100%;
        height: 37rem
      }

      .texto {
        width: 100%;
        height: 25rem
      }

      img#personal {
        width: 210px;
        height: 180px;
        border-radius: 20rem;
        box-shadow: 0 0 5px rgba(0, 0, 0, .8)
      }

      img#languajes {
        width: 220px;
        height: 220px;
        filter: drop-shadow(0 0 .5px rgba(0, 0, 0, .8))
      }

      h2 {
        color: var(--background);
        margin-bottom: 1rem;
        text-align: center;
        padding-top: 2rem
      }

      p {
        color: var(--background);
        line-height: 1.5;
        text-align: center;
        width: 90%;
        margin: 0px auto;
        margin-bottom: 2rem
      }

      .margin {
        width: 100%;
        margin: 0px auto;
        text-align: center
      }

    }
  `;

  render() {
    return html`
      <div class="main">
        <div class="about grid">

          <div class="${this.isPhone ? 'historia' : `flex flex-jcsb ${this.isDesktop ? 'flex-at' : 'padding'}`}">
            
            <div class="texto">
              <h2>About Me</h2>
              <p class="p-w">My name is Ismael, I am 24 years old, and I am currently studying a higher degree in web application development at Ribera de Castilla. 
                I have completed this project as my final degree project, where I have applied all the knowledge I have gained during the course, in addition to many hours spent researching on my own. 
                I have dedicated many hours to this project; however, despite my efforts, I was not able to achieve everything I wanted due to time constraints. 
                This does not mean that I will not improve the application in the future or even add new features and enhancements.</p>
            </div>

            <div class="margin">
              <img alt="face" src=${this.srcImg1} id="personal" class="${this.isDesktop ? '' : 'm-img'}">
            </div>
            
          </div>

          <div class="caracteristicas ${this.isPhone ? '' : `flex flex-jcsb ${this.isDesktop ? 'flex-at' : 'padding'}`}">
            <div class="texto">
              <h2>Languages and Features</h2>
              <p class="p-w">To develop this application, I used several programming languages. 
                For the front-end, I used LitElement and Redux as a global state container to maintain control of all the variables generated and used by the user during the application's execution, particularly lists and booleans, which are very important. For the back-end, I used PostgreSQL and Node.js for handling the endpoints. 
                For database management, I used DBeaver, which I learned to use while working at the company.</p>
            </div>

            <div class="margin">
              <img alt="face" src=${this.srcImg2} id="languajes">
            </div>
          </div>

        </div>
      </div>
    `;
  }
}

customElements.define('about-view', AboutView)
