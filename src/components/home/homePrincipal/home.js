/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
import { LitElement, html, css } from 'lit'

export class HomeComponentView extends LitElement {

  static properties = {
    isDesktop: { type: Boolean },
    isIpad: { type: Boolean },
    isPhone: { type: Boolean },
    isLogged: { type: Boolean },
    srcImagen: { type: String}
  }

  static styles = css`

      .main {
        background-color: var(--background);
        width: 100%;
        height: 100%;
        padding-top: 5rem;
        overflow-y: auto;
      }

      .flex {
        display: flex;
      }

      .flex-at {
        align-items: center
      }

      .flex-jc {
        justify-content: space-around
      }

      .flex-jcc {
        justify-content: center
      }

      *,
      *::before,
      *::after 
      {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0px;
        margin: 0px
      }

      @media only screen and (min-width: 834px) {

          .ctn {
            width: 90%;
            height: 31.25rem;
            margin: 0px auto; 
          }

          .grid {
            display: grid;
            grid-template-rows: [uno] 100% [dos];
            grid-template-columns: [uno] auto [dos] 31.25rem [tres];
            grid-template-areas: "text img";
          }

          .text {
            grid-area: text;
          }

          img#logohome {
            width: 100%;
            height: 100%;
          }

          h2 {
            font-size: var(--heading3);
            color: var(--secondary);
          }

          h2:nth-child(2) {
            margin-top: 0.3rem;
            margin-bottom: 7rem;
          }

          .home {
            font-size: var(--navigation1);
          }

          .c {
            margin-top: 0.3rem;
            margin-bottom: 1.5rem;
          }

          button {
            cursor: pointer;
            background-color: var(--secondary);
            width: 14rem;
            font-size: var(--navigation2);
            color: var(--background);
            border: none;
            height: 3.5rem;
            border-radius: 2rem;
            transition: all .2s;
          }

          button:hover {
            
            transform: scale(1.02)
          }
      }

      @media only screen and (min-width: 430px) and (max-width: 842px) { 

        .main {
          background-color: var(--background);
          width: 100%;
          height: 100%;
          padding-top: 2rem;
        }
        
        .ctn {
          width: 90%;
          height: 100%;
          margin: 0px auto; 
        }

        .grid-c {
          display: grid;
          grid-template-rows: [uno] 22rem [dos] 27rem [tres];
          grid-template-columns: [uno] 100% [dos];
        }

        img#logohome {
          display: block;
          width: 325px;
          height: 325px;
        }

        h2 {
          font-size: var(--heading3);
          color: var(--secondary);
          text-align: center
        }

        h2:nth-child(2) {
          margin-top: 0.3rem;
          margin-bottom: 2.5rem;
          text-align: center
        }

        .home {
          font-size: var(--navigation1);
          text-align: center
        }

        .c {
          margin-top: 0.3rem;
          margin-bottom: 1rem;
        }

        button {
          cursor: pointer;
          background-color: var(--secondary);
          width: 14rem;
          font-size: var(--navigation2);
          color: var(--background);
          border: none;
          height: 3.5rem;
          border-radius: 2rem;
          transition: all .2s;
        }

        button:hover { 
          transform: scale(1.02)
        }

        .btn {
          width: 100%;
          height: 3.5rem;
        }

      }

      @media only screen and (max-width: 428px) { 
        
        .ctn {
          width: 95%;
          height: 100%;
          margin: 0px auto; 
        }

        .grid-c {
          display: grid;
          grid-template-rows: [uno] 33rem [dos] 15.625rem [tres];
          grid-template-columns: [uno] 100% [dos];
        }

        img#logohome {
          display: block;
          width: 250px;
          height: 250px;
        }

        h2 {
          font-size: var(--heading3);
          color: var(--secondary);
          text-align: center
        }

        h2:nth-child(2) {
          margin-top: 0.3rem;
          margin-bottom: 1.5rem;
          text-align: center
        }

        .home {
          font-size: var(--navigation1);
          text-align: center
        }

        .c {
          margin-top: 0.3rem;
          margin-bottom: 1rem;
        }

        button {
          cursor: pointer;
          background-color: var(--secondary);
          width: 14rem;
          font-size: var(--navigation2);
          color: var(--background);
          border: none;
          height: 3.5rem;
          border-radius: 2rem;
          transition: all .2s;
        }

        button:hover { 
          transform: scale(1.02)
        }

        .btn {
          width: 100%;
          height: 3.5rem;
        }

        .padding {
          padding: 1.5rem;
        }

        .o-a {
          overflow: auto;
        }

      }

    `;

  btnclick(rute) {

    if(this.isLogged === 'true') {
    } else {
      localStorage.setItem('zone', rute)
    }
    // Esto hay que hacerlo cuando se renderiza la ruta
  }

  constructor() {
    super()
    this.isDesktop = true
    this.isPhone = false
    this.isIpad = false
    this.srcImagen = ''
  }

  render() {
    return html`
      <div class="main ${this.isPhone ? 'padding o-a' : ''}">
        <div class="ctn ${ this.isDesktop ? 'grid' : 'grid-c' }">
          <div class="text">
            <h2>Your Electronics Destination: </h2>
            <h2>Shop the Latest and Greatest Gadgets</h2>

            <p class="home">Stay Connected, Informed, and Entertained</p>
            <p class="home c">with Our Electronics Selection</p>
            ${ this.isDesktop ? html`
              <button @click=${() => this.btnclick('signin')} class="flex flex-at flex-jc">
                <p>Get Started</p>
                <svg width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 3.577a1.146 1.146 0 0 0-1.414 0c-.39.326-.39.854 0 1.179l5.293 4.41H5c-.552 0-1 .374-1 .834 0 .46.448.833 1 .833h11.586l-5.293 4.411c-.39.325-.39.853 0 1.179.39.325 1.024.325 1.414 0l7-5.834c.39-.325.39-.853 0-1.178l-7-5.834Z" fill="#fff"/>
                </svg>
              </button>` 
              : html`
              <div class="btn flex flex-jcc">
                <button @click=${() => this.btnclick('signin')} class="flex flex-at flex-jc">
                  <p>Get Started</p>
                  <svg width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 3.577a1.146 1.146 0 0 0-1.414 0c-.39.326-.39.854 0 1.179l5.293 4.41H5c-.552 0-1 .374-1 .834 0 .46.448.833 1 .833h11.586l-5.293 4.411c-.39.325-.39.853 0 1.179.39.325 1.024.325 1.414 0l7-5.834c.39-.325.39-.853 0-1.178l-7-5.834Z" fill="#fff"/>
                  </svg>
                </button>
              </div>
              ` 
            }
            
          </div>
          <div class="img ${ this.isDesktop ? '' : 'flex flex-at flex-jcc' }">
            <img id="logohome" alt="logo" src=${this.srcImagen}>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('homecomponent-view', HomeComponentView);