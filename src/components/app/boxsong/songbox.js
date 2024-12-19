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
          background-color: var(--secondary);
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

        p {
          width: 40%
        }

      }
  `

  render() {
    return html`
        <div class="box flex flex-at flex-jcsa">
          
        <p>${this.album}</p>

          <p>${this.name}</p>

          <svg width="24" height="24" fill="white" id="play-pause">
            <path fill-rule="evenodd" clip-rule="evenodd" d=${this.play} fill="#fff"/>
          </svg>

          </div>
        </div>
        `;
  }
}

customElements.define('box-song', BoxSong);