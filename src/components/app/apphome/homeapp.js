/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit'
import { GetArtsits, GetGenres, GetFullSongs } from '../../../api/callapi'
import '../artistComponent/artistComponent'
import logo from '../../../img/Heart.jpg'
import useStore from '../../../container/StoreZustand'

export class HomeView extends LitElement {

  static properties = {
    isDesktop: { type: Boolean },
    isIpad: { type: Boolean },
    isPhone: { type: Boolean },
    username: { type: String },
    songname: { type: String },
    arraygenres: { type: Array },
    srcImg: { type: String},
    arrayartists: { type: Array},
    originalsongs: { type: Array},
    originalsongs2: { type: Array},
    song: { type:  String}
  }

  constructor() {
    super()
    const user = JSON.parse(localStorage.getItem('usuario'))
    this.username = user.username
    this.arraygenres = []
    this.obtenerGenres()
    this.srcImg = ''
    this.arrayartists = []
    this.originalsongs = []
    this.originalsongs2 = []
    this.obtenerArtist()
    this.obtenerSongs()
    this.song = ''
  }

  async obtenerGenres() {
    this.arraygenres = await GetGenres()
  }

  async obtenerSongs() {
    this.originalsongs = await GetFullSongs()
  }

  async obtenerSongName() {
    this.originalsongs2 = await GetFullSongs()
    const randomIndex = Math.floor(Math.random() * this.originalsongs2.length);
    this.song = this.originalsongs2[randomIndex].name
  }

  async obtenerArtist() {
    this.arrayartists = await GetArtsits()
  }

  static styles = css`
    
      .flex {
        display: flex;
      }

      .flex-column {
        flex-direction: column
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
              display: inline-block;
              overflow-y: scroll
            }

            svg#profile {
              cursor: pointer;
              margin-right: 1.5rem
            }
            
            .ib {
              display: inline
            }

            .randomSong {
              width: 90%;
              left: 4.5rem;
              padding-top: 2rem;
              height: 20rem;
              position: absolute;
              bottom: 6rem;
              padding-left: 1rem;
              border-radius: 2rem;
              border: 0.3rem solid white
            }

            .psong {
              width: 90%;
              height: 5rem;
              margin-top: 8rem;
              text-align: center;
              color: var(--background);
              font-size: var(--heading)
            }
        }
    `;

  firstUpdated() {

    const profile = this.shadowRoot.querySelector('#profile')
    profile.addEventListener('click', () => this.profile())
    this.obtenerSongName()
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

  GoPerfil() {
    this.dispatchEvent(new CustomEvent('toggleperfil', { detail: { perfil: true }, bubbles: true, composed: true }))
  }

  changeSong(name) {
    useStore.getState().setSongName(name)
  }

  render() {
    return html`
            <div class="main grid">
              <div class="recomendation">
                <div class="nav flex flex-at">
                  <p id="home" @click=${() => this.navigate()}>Home</p>
                  <svg width="24" height="24" fill="none" id="profile" @click=${() => this.GoPerfil()}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 2.293A1 1 0 0 1 13 3v.094a2.65 2.65 0 0 0 1.601 2.423 2.65 2.65 0 0 0 2.918-.532l.069-.068a1 1 0 0 1 1.415 0 .999.999 0 0 1 0 1.416l-.06.06-.008.008a2.65 2.65 0 0 0-.607 2.729c.012.09.037.18.073.264A2.65 2.65 0 0 0 20.826 11H21a1 1 0 0 1 0 2h-.094a2.65 2.65 0 0 0-2.423 1.601 2.65 2.65 0 0 0 .532 2.918l.068.069a1 1 0 0 1 .217 1.09 1.057 1.057 0 0 1-.1.179 1.106 1.106 0 0 1-.117.146 1 1 0 0 1-1.416 0l-.06-.06-.008-.008a2.651 2.651 0 0 0-2.918-.532 2.65 2.65 0 0 0-1.601 2.423V21a1 1 0 0 1-2 0v-.113a2.65 2.65 0 0 0-1.705-2.415 2.651 2.651 0 0 0-2.894.543l-.069.068a.999.999 0 0 1-1.415 0 1 1 0 0 1 0-1.416l.06-.06.008-.008a2.65 2.65 0 0 0 .532-2.918 2.65 2.65 0 0 0-2.423-1.601H3a1 1 0 0 1 0-2h.113a2.65 2.65 0 0 0 2.414-1.705 2.65 2.65 0 0 0-.542-2.894l-.068-.069a1 1 0 0 1 0-1.415 1 1 0 0 1 1.416 0l.06.06.008.008a2.65 2.65 0 0 0 2.729.607 1 1 0 0 0 .264-.073A2.65 2.65 0 0 0 11 3.174V3a1 1 0 0 1 .293-.707ZM12 0a3 3 0 0 0-3 3v.167a.65.65 0 0 1-.285.534 1 1 0 0 0-.199.064.65.65 0 0 1-.714-.127l-.054-.055a3 3 0 1 0-4.245 4.244l.055.055a.65.65 0 0 1 .127.714l-.024.059a.65.65 0 0 1-.585.425H3a3 3 0 1 0 0 6h.167a.65.65 0 0 1 .594.394l.004.01a.65.65 0 0 1-.127.714l-.055.055a3 3 0 0 0 3.27 4.895c.365-.151.696-.372.974-.651l.055-.055a.65.65 0 0 1 .714-.127l.059.023a.651.651 0 0 1 .425.586V21a3 3 0 1 0 6 0v-.168a.65.65 0 0 1 .394-.593l.01-.004a.65.65 0 0 1 .714.127l.055.055a2.999 2.999 0 0 0 4.895-.973 3 3 0 0 0-.651-3.271l-.055-.055a.65.65 0 0 1-.127-.714l.004-.01a.65.65 0 0 1 .594-.394H21a3 3 0 0 0 0-6h-.168a.65.65 0 0 1-.533-.285 1.006 1.006 0 0 0-.064-.199.65.65 0 0 1 .127-.714l.055-.055a2.999 2.999 0 0 0-.973-4.895 3 3 0 0 0-3.271.651l-.055.055a.65.65 0 0 1-.714.127l-.01-.004A.65.65 0 0 1 15 3.087V3a3 3 0 0 0-3-3Zm-2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#fff"/>
                  </svg>
                  <div class="profile flex flex-at flex-jcsa">
                      <img alt="logo" src="${this.srcImg}" id="infosong">

                    <div class="info2 flex flex-jc">
                      <p id="username">${this.username}</p>
                      <div class="songname">
                        <p id="songname">${this.song.name}</p>
                      </div>
                                           
                    </div>
                  </div>

                </div>
                <div class='randomSong'>
                  <div class='flex flex-at flex-column'>
                    <svg fill="#fff" version="1.1" id="Capa_1"
                      width="40" height="40" viewBox="0 0 441.739 441.739"
                      >
                    <g>
                      <path d="M297.896,390.035l-0.225,14.383c12.407-5.313,24.213-11.773,35.266-19.256c-1.194-18.077,6.239-38.103,21.752-53.619
                        c13.041-13.04,29.707-20.786,46.174-21.721c3.318-6.195,6.332-12.562,9.017-19.103v-40.127l-111.983,30.02v102.033l0.016,0.293
                        l-0.016,0.48V390.035z"/>
                      <path d="M421.608,169.114C402.257,72.789,317.023,0,215.082,0C98.929,0,4.434,94.497,4.434,210.65
                        c0,103.672,75.298,190.033,174.073,207.405c-3.232-19.372,4.051-41.902,21.121-58.978c13.926-13.93,31.973-21.908,49.51-21.908
                        c1.907,0,3.795,0.092,5.634,0.276v-56.625c-11.729,6.66-25.261,10.52-39.697,10.52c-44.486,0-80.684-36.203-80.684-80.69
                        c0-44.488,36.197-80.686,80.684-80.686c41.897,0,76.405,32.1,80.297,72.985L421.608,169.114z M150.09,135.804L99.063,52.153
                        c0,0,35.554-31.468,78.453-31.468l15.751,92.607C193.268,113.284,163.074,114.703,150.09,135.804z M208.941,115.56l-14.056-98.869
                        l15.545-2.204l14.06,98.865L208.941,115.56z"/>
                      <path d="M215.082,153.517c-31.504,0-57.134,25.629-57.134,57.134c0,31.502,25.629,57.138,57.134,57.138
                        c15.417,0,29.406-6.164,39.706-16.13v-26.157v-4.203v-11.496h1.479h13.529l2.364-0.635
                        C271.354,178.353,246.092,153.517,215.082,153.517z M215.082,228.368c-9.766,0-17.708-7.951-17.708-17.717
                        s7.942-17.717,17.708-17.717c9.769,0,17.709,7.951,17.709,17.717S224.851,228.368,215.082,228.368z"/>
                      <path d="M437.246,356.256h0.06v-71.817v-57.45v-1.487v-6.804v-16.108v-21.432l-1.739,0.467l-11.485,3.08l-128.771,34.518
                        l-12.402,3.334l-11.057,2.958h-1.379v0.368v25.644v17.641v2.533v88.163c-5.902-4.7-13.356-7.001-21.344-7.001
                        c-12.827,0-27.028,5.927-38.413,17.305c-15,15.008-20.556,34.925-15.589,50.152c1.491,4.585,3.85,8.784,7.302,12.251
                        c0.054,0.044,0.116,0.076,0.172,0.128c6.162,6.079,14.491,9.041,23.518,9.041c11.229,0,23.515-4.557,34.059-13.257
                        c1.587-1.311,3.149-2.705,4.645-4.207c3.526-3.527,6.324-7.374,8.784-11.334c4.625-7.405,7.546-15.284,8.336-22.922h0.244v-6.66
                        c-0.008-0.133,0.008-0.261,0-0.393V268.562l142.588-38.215l0.802-0.217v52.346v30.729v19.163c-2.389-1.899-5.081-3.317-7.91-4.444
                        c-3.755-1.494-7.803-2.332-12.066-2.484c-0.478-0.016-0.935-0.107-1.419-0.107c-4.561,0-9.297,0.789-14.006,2.268
                        c-8.564,2.669-17.063,7.706-24.409,15.044c-8.977,8.984-14.443,19.74-16.45,30.196c-1.015,5.281-1.074,10.419-0.201,15.28
                        c0.733,4.107,2.032,7.986,4.156,11.437c1.202,1.948,2.545,3.827,4.216,5.482c6.171,6.18,14.575,9.177,23.688,9.177
                        c12.912,0,27.255-6.019,38.7-17.464C431.88,384.777,437.835,369.637,437.246,356.256z"/>
                    </g>
                    </svg>
                    <p class='psong'>${this.song ? this.song : "Loading song..."}</p>
                  </div>
                </div>
                <div class="btnlike flex flex-at">
                  <button class="btn" @click=${() => this.changeSong(this.song)}>
                    Listen Now
                  </button>
                </div>
              </div>
              <div class="info">
                <div class="artists">
                  <p id="tp">Top Artsts</p>
                  ${this.arrayartists.map( (value) => html` <artist-component .artistName="${value.name}" .logo=${logo}></artist-component> ` ) }
                </div>
                <div class="genrescharts flex flex-at flex-jc">

                  <div class="genres flex flex-jc flex-w">
                    <p id="genres">Genres</p>
                    ${this.arraygenres.map(genre => html`<div class="genre flex flex-at flex-jccc" style="background-color: ${this.getRandomColor()};" @click=${() => this.goSearch(genre.description)}>${genre.description}</div>`)}
                  </div>

                  <div class="charts">
                    <p id="tc">Top Charts</p>
                    ${this.originalsongs.map( (value) => html` <box-song .name="${value.name}" .album="${value.album_name}" @click=${() => this.changeSong(value.name)}></box-song> ` ) }
                  </div>
                </div>
                
              </div>
            </div>
        `;
  }
}

customElements.define('homeapp-view', HomeView);