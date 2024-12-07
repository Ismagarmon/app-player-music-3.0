import { LitElement, html, css } from 'lit';

class BoxSong extends LitElement {

  static properties = {
    name: { type: String },
    album: { type: String },
    artist: { type: String },
    duration: { type: String }
  }

  constructor() {
    super()
    this.name = ''
    this.album = ''
    this.artist = ''
    this.duration = ''
    this.pause = "M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6Zm1 16V5h2v14H7Zm7-16a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4Zm1 16V5h2v14h-2Z"
    this.play = "M4.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 4 21V3a1 1 0 0 1 .52-.878ZM6 4.832v14.336L17.15 12 6 4.832Z"
    this.isPlaying = false
  }

  static styles = css` 
      .flex {
        display: flex;
      }

      .flex-at {
        align-items: center
      }

      .flex-jc {
        justify-content: space-evenly
      }

      .flex-jcsb {
        justify-content: space-between
      }

      .flex-jcsa {
        justify-content: space-around
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

        .box {
          width: 97%;
          height: 4rem;
          margin: 1rem auto;
          border-radius: 0.5rem;
          background-color: var(--secondary_variant);
          border: 0.1rem solid var(--background);
          color: var(--background);
          transition: all .3s
        }

        .box:hover {
          transform: scale(1.01)
        }

        .controls {
          width: 7rem;
          height: 2rem;
          border-radius: 1rem;
          background-color: var(--primary)
        }

        svg {
          cursor: pointer;
        }

      }
  `

  firstUpdated() {

    const svgplay = this.shadowRoot.querySelector('#play-pause')
    svgplay.addEventListener('click', () => this.togglestate())

    const rate = this.shadowRoot.querySelector('#rate')
    rate.addEventListener('click', () => this.rate())

    const remove = this.shadowRoot.querySelector('#delete')
    remove.addEventListener('click', () => this.delete())

  }

  render() {
    return html`
        <div class="box flex flex-at flex-jcsa">
          
          <img alt="albumimg"></img>

          <p>${this.artist} - ${this.name}</p>
          <p>${this.album}</p>
          <p>${this.duration}</p>

          <svg width="24" height="24" fill="white" id="play-pause">
            <path fill-rule="evenodd" clip-rule="evenodd" d=${this.isPlaying ? this.pause : this.play} fill="#fff"/>
          </svg>

          <div class="controls flex flex-at flex-jcsa">
            <svg width="20" height="20" fill="none" id="rate">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.405 1.31a.834.834 0 0 1 .762-.488c.884 0 1.732.347 2.357.964.625.617.976 1.453.976 2.326v2.467h3.88a2.529 2.529 0 0 1 1.909.848 2.457 2.457 0 0 1 .585 1.99l-1.15 7.4a2.461 2.461 0 0 1-.853 1.51 2.52 2.52 0 0 1-1.642.587H3.333c-.663 0-1.299-.26-1.767-.722a2.45 2.45 0 0 1-.733-1.745v-5.756c0-.655.264-1.282.733-1.745a2.517 2.517 0 0 1 1.767-.722h1.959L8.405 1.31ZM6.667 9.22l3.006-6.675c.251.079.482.216.672.404.313.308.488.727.488 1.163v3.29c0 .453.373.822.834.822h4.726a.843.843 0 0 1 .638.282.818.818 0 0 1 .195.663l-1.15 7.402a.82.82 0 0 1-.284.503.84.84 0 0 1-.55.196H6.668V9.22ZM5 17.27V9.868H3.333a.839.839 0 0 0-.589.241.817.817 0 0 0-.244.582v5.756c0 .218.088.428.244.582.156.154.368.24.59.24H5Z" fill="#fff"/>
            </svg>

            <svg width="24" height="24" fill="none" id="delete">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.293 3.293A1 1 0 0 1 10 3h4a1 1 0 0 1 1 1v1H9V4a1 1 0 0 1 .293-.707ZM7 5V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4a1 1 0 1 1 0 2h-1v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7H3a1 1 0 0 1 0-2h4ZM6 7v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7H6Zm4 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm5 7v-6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0Z" fill="#fff"/>
            </svg>
          </div>
        </div>
        `;
  }
}

customElements.define('box-song', BoxSong);