/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';


export class RateSongView extends LitElement {

    static properties = {
      artist: { type: String},
      album: { type: String},
      song: { type: String},
      likes: { type: Number},
      dislike: { type: Number},
      songname: { type: String},
      artistname: { type: String },
      albumname: { type: String}
    }

    constructor() {
      super()
      this.artist = 'Taylor Swift'
      this.album = 'Album'
      this.song = 'Anti-Hero'
      this.likes = 0
      this.dislike = 0
      
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

      .flex-jcsb {
        justify-content: space-between
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

            .gridhead {
              display: grid;
              grid-template-columns: [uno] 17rem [dos] auto [tres];
              grid-template-rows: [uno] 17rem [dos] auto [tres];
              grid-template-areas: 
              "img info"
              "comments comments";
              gap: 0.5rem;

            }

            .main {
              height: 100%;
              width: 100%;
            }

            .comments {
              grid-area: comments;
              width: 100%;
              height: 100%;
              border-radius: 1rem;
              background-color: rgba(19, 67, 75, 0.5);
              position: relative;
            }

            .img {
              width: 100%;
              height: 100%;
              background-color: var(--primary_variant);
              border-radius: 1rem
            }

            .info {
              width: 100%;
              height: 100%;
              background-color: var(--primary_variant);
              border-radius: 1rem;
              color: var(--background);
              padding-left: 1rem
            }

            .comment {
              width: 100%;
              height: 5rem;
              position: absolute;
              bottom: 0;
              padding-left: 1.5rem
            }

            img#logo {
              width: 60px;
              height: 60px;
              border-radius: 4rem;
              margin-right: 1rem
            }

            input#comment {
              background-color: var(--secondary);
              padding: 0.5rem;
              padding-left: 1.5rem;
              font-family: var(--font);
              border: none;
              height: 3rem;
              border-radius: 4rem;
              color: var(--background);
              width: 90%;
              font-size: var(--navigation1);
              margin-right: 1rem;
              outline: none
            }

            svg#send {
              cursor: pointer
            }

            .info h3 {
              margin-bottom: 6rem;
              margin-top: 1rem;
              font-size: var(--heading2)
            }

            .info p {
              font-size: var(--navigation2);
              margin-bottom: 1rem
            }

        }
    `;

        firstUpdated() {

          const send = this.shadowRoot.querySelector('#send')
          send.addEventListener('click', () => this.enviar())

        }

    enviar() {
      alert('ASD')
    }

    render() {
        return html`
            <div class="main gridhead">
              <div class="img">
                <img alt="Artist">
              </div>
              <div class="info">
                <h3>${this.artist}</h3>
                <p>${this.album}</p>
                <p>${this.song}</p>
              </div>
              <div class="comments">
                <div class="comment flex flex-at">
                  <img alt="logo" src="../assets/img/Logo.png" id="logo">
                  <input type="text" placeholder="Add a comment..." id="comment">
                    <svg width="27" height="27" fill="white" viewBox="0 0 32 32" id="send">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.75C8.787 3.75 3.75 8.787 3.75 15S8.787 26.25 15 26.25 26.25 21.213 26.25 15 21.213 3.75 15 3.75ZM1.25 15C1.25 7.406 7.406 1.25 15 1.25S28.75 7.406 28.75 15 22.594 28.75 15 28.75 1.25 22.594 1.25 15Zm14.634-5.884 5 5a1.25 1.25 0 0 1 0 1.768l-5 5a1.25 1.25 0 0 1-1.768-1.768l2.866-2.866H10a1.25 1.25 0 1 1 0-2.5h6.982l-2.866-2.866a1.25 1.25 0 0 1 1.768-1.768Z" fill="#fff"/>
                    </svg>
                </div>
              </div>
            </div>
        `;
    }
}

customElements.define('ratesong-view', RateSongView);