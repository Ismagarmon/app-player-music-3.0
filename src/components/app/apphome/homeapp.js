/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit'
import { GetGenres } from '../../../api/callapi'

export class HomeView extends LitElement {

  static properties = {
    isDesktop: { type: Boolean },
    isIpad: { type: Boolean },
    isPhone: { type: Boolean },
    username: { type: String },
    songname: { type: String },
    arraygenres: { type: Array },
    srcImg: { type: String}
  }

  constructor() {
    super()
    const user = JSON.parse(localStorage.getItem('usuario'))
    this.username = user.username
    this.arraygenres = []
    this.obtenerGenres()
    this.srcImg = ''
  }

  async obtenerGenres() {
    this.arraygenres = await GetGenres()

  }

  static styles = css`
    
      .flex {
        display: flex;
      }

      .flex-at {
        align-items: center
      }

      .flex-jc {
        justify-content: space-around
      }

      .flex-jccc {
        justify-content: center
      }

      .flex-jcsb {
        justify-content: space-between
      }

      .flex-jcsa {
        justify-content: space-around
      }

      .flex-w {
        flex-wrap: wrap
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

            .main {
              height: 100%;
              width: 100%
            }

            .grid {
              display: grid;
              grid-template-columns: [uno] 100% [dos];
              grid-template-rows: [uno] auto [dos] 31.5rem [tres];
              gap: 0.5rem;
              grid-template-areas: 
              "recomendation"
              "info";
            }

            .recomendation {
              width: 100%;
              height: 100%;
              background-color: red;
              border-radius: 1rem;
              background-color: var(--primary_variant);
              position: relative
            }

            .info {
              width: calc(100% - 20.12rem);
              height: 100%;
              border-radius: 1rem
            }

            .nav {
              width: 100%;
              height: 4rem;
              border-radius: 1rem;
              padding-left: 2rem;
              margin-top: 0.5rem
            }

            .nav p {
              color: var(--background);
              font-size: var(--navigation2);
              display: inline-block
            }

            .profile {
              width: 14%;
              height: 100%;
              background-color: var(--primary);
              border-radius: 0.4rem
            }

            .info2 {
              width: 62%;
              height: 100%;
              display: inline-block;
              text-align: center;
              padding-top: 0.3rem
              
            }

            img#infosong {
              width: 50px;
              height: 50px;
              border: 1px transparent;
              border-radius: 4rem;
              display: block
            }

            p#username {
              padding-bottom: 0.3rem;
              color: var(--background)
            }

            .songname {
              width: 7rem;
              max-height: 2rem;
              overflow-x: hidden
            }

            p#songname {
              font-size: var(--button);
              color: var(--background);
              width: 100%;
              overflow-x: hidden;
              max-height: 2rem;
              white-space: nowrap;
              overflow-x: visible
            }

            p#home {
              margin-right: 78%;
              cursor: pointer
            }

            .btnlike {
              width: 100%;
              height: 5rem;
              position: absolute;
              bottom: 0;
              padding-left: 1rem
            }

            button {
              border: none;
              border-radius: 0.3rem;
              font-size: var(--navigation1);
              font-family: var(--font);
              cursor: pointer
            }

            .btn {
              width: 9rem;
              height: 3rem;
              color: var(--on_background);
              background-color: var(--secondary);
              margin-right: 2rem
            }

            .artists {
              width: 100%;
              height: 10rem;
              background-color: var(--primary_variant);
              border-radius: 1rem;
              padding-top: 1rem;
              margin-bottom: 0.5rem
            }

            p#tp, p#genres, p#tc {
              width: 100%;
              height: 2rem;
              font-size: var(--heading2);
              color: var(--background);
              padding-left: 1rem;
              margin-bottom: 0.5rem
            }

            p#genres {
              height: 4rem;
              position: sticky;
              top: 0rem;
              background-color: var(--primary_variant);
              z-index: 100;
              padding-top: 1rem;
              border-radius: 1rem;
              box-shadow: 2px 1px 1px 2px var(--on_background)
            }

            .genrescharts {
              width: 100%;
              height: 21rem;
              border-radius: 1rem
            }

            .genres {
              width: 40%;
              height: 21rem;
              max-height: 21rem;
              max-width: 40%;
              background-color: var(--primary_variant);
              border-radius: 1rem;
              margin-right: 0.5rem;
              overflow-y: scroll;
              color: var(--background)
            }

            .genre {
              width: 13rem;
              height: 3.5rem;
              margin-bottom: 0.8rem;
              border-radius: 1rem;
              cursor: pointer
            }

            .charts {
              width: 59%;
              height: 21rem;
              background-color: var(--primary_variant);
              border-radius: 1rem;
              padding-top: 1rem;
              display: inline-block
            }

            svg#profile {
              cursor: pointer;
              margin-right: 1.5rem
            }
            
            .ib {
              display: inline
            }
        }
    `;

  firstUpdated() {

    const profile = this.shadowRoot.querySelector('#profile')
    profile.addEventListener('click', () => this.profile())

  }

  profile() {
    this.dispatchEvent(new CustomEvent('toggleprofile', { detail: { main: false }, bubbles: true, composed: true }))
    // localStorage.setItem('appzone', 'profile')
  }

  genreColors = [
    "#1C2833", 
    "#1F618D", 
    "#117864", 
    "#2980B9", 
    "#A569BD", 
    "#F4D03F", 
    "#E74C3C", 
    "#F39C12", 
    "#3498DB", 
    "#7DCEA0"
  ]

  getRandomColor() {
    return this.genreColors[Math.floor(Math.random() * this.genreColors.length)]
  }

  goSearch(genreparam) {
    this.dispatchEvent(new CustomEvent('togglemain', { detail: { expanded: false }, bubbles: true, composed: true }))
    this.dispatchEvent(new CustomEvent('togglegenre', { detail: { genre: genreparam }, bubbles: true, composed: true }))
    // localStorage.setItem('Genre', genre)
    // localStorage.setItem('appzone', 'Artist')
  }

  navigate() {
    this.dispatchEvent(new CustomEvent('togglehome', { detail: { homemain: true }, bubbles: true, composed: true }))
  }

  render() {
    return html`
            <div class="main grid">
              <div class="recomendation">
                <div class="nav flex flex-at">
                  <p id="home" @click=${() => this.navigate()}>Home</p>
                  <svg width="24" height="24" fill="none" id="profile">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 2.293A1 1 0 0 1 13 3v.094a2.65 2.65 0 0 0 1.601 2.423 2.65 2.65 0 0 0 2.918-.532l.069-.068a1 1 0 0 1 1.415 0 .999.999 0 0 1 0 1.416l-.06.06-.008.008a2.65 2.65 0 0 0-.607 2.729c.012.09.037.18.073.264A2.65 2.65 0 0 0 20.826 11H21a1 1 0 0 1 0 2h-.094a2.65 2.65 0 0 0-2.423 1.601 2.65 2.65 0 0 0 .532 2.918l.068.069a1 1 0 0 1 .217 1.09 1.057 1.057 0 0 1-.1.179 1.106 1.106 0 0 1-.117.146 1 1 0 0 1-1.416 0l-.06-.06-.008-.008a2.651 2.651 0 0 0-2.918-.532 2.65 2.65 0 0 0-1.601 2.423V21a1 1 0 0 1-2 0v-.113a2.65 2.65 0 0 0-1.705-2.415 2.651 2.651 0 0 0-2.894.543l-.069.068a.999.999 0 0 1-1.415 0 1 1 0 0 1 0-1.416l.06-.06.008-.008a2.65 2.65 0 0 0 .532-2.918 2.65 2.65 0 0 0-2.423-1.601H3a1 1 0 0 1 0-2h.113a2.65 2.65 0 0 0 2.414-1.705 2.65 2.65 0 0 0-.542-2.894l-.068-.069a1 1 0 0 1 0-1.415 1 1 0 0 1 1.416 0l.06.06.008.008a2.65 2.65 0 0 0 2.729.607 1 1 0 0 0 .264-.073A2.65 2.65 0 0 0 11 3.174V3a1 1 0 0 1 .293-.707ZM12 0a3 3 0 0 0-3 3v.167a.65.65 0 0 1-.285.534 1 1 0 0 0-.199.064.65.65 0 0 1-.714-.127l-.054-.055a3 3 0 1 0-4.245 4.244l.055.055a.65.65 0 0 1 .127.714l-.024.059a.65.65 0 0 1-.585.425H3a3 3 0 1 0 0 6h.167a.65.65 0 0 1 .594.394l.004.01a.65.65 0 0 1-.127.714l-.055.055a3 3 0 0 0 3.27 4.895c.365-.151.696-.372.974-.651l.055-.055a.65.65 0 0 1 .714-.127l.059.023a.651.651 0 0 1 .425.586V21a3 3 0 1 0 6 0v-.168a.65.65 0 0 1 .394-.593l.01-.004a.65.65 0 0 1 .714.127l.055.055a2.999 2.999 0 0 0 4.895-.973 3 3 0 0 0-.651-3.271l-.055-.055a.65.65 0 0 1-.127-.714l.004-.01a.65.65 0 0 1 .594-.394H21a3 3 0 0 0 0-6h-.168a.65.65 0 0 1-.533-.285 1.006 1.006 0 0 0-.064-.199.65.65 0 0 1 .127-.714l.055-.055a2.999 2.999 0 0 0-.973-4.895 3 3 0 0 0-3.271.651l-.055.055a.65.65 0 0 1-.714.127l-.01-.004A.65.65 0 0 1 15 3.087V3a3 3 0 0 0-3-3Zm-2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#fff"/>
                  </svg>
                  <div class="profile flex flex-at flex-jcsa">
                      <img alt="logo" src="${this.srcImg}" id="infosong">

                    <div class="info2 flex flex-jc">
                      <p id="username">${this.username}</p>
                      <div class="songname">
                        <p id="songname">${this.songname}</p>
                      </div>
                                           
                    </div>
                  </div>

                </div>

                <div class="btnlike flex flex-at">
                  <button class="btn">
                    Listen Now
                  </button>
                </div>
              </div>
              <div class="info">
                <div class="artists">
                  <p id="tp">Top Artsts</p>
                </div>
                <div class="genrescharts flex flex-at flex-jc">

                  <div class="genres flex flex-jc flex-w">
                    <p id="genres">Genres</p>
                    ${this.arraygenres.map(genre => html`<div class="genre flex flex-at flex-jccc" style="background-color: ${this.getRandomColor()};" @click=${() => this.goSearch(genre.description)}>${genre.description}</div>`)}
                  </div>

                  <div class="charts">
                    <p id="tc">Top Charts</p>
                  </div>
                </div>
                
              </div>
            </div>
        `;
  }
}

customElements.define('homeapp-view', HomeView);