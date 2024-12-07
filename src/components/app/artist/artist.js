/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import { GetAlbums, GetArtsits } from '../../../api/callapi';


export class ArtistView extends LitElement {

    static properties = {
        isDesktop: { type: Boolean },
        isIpad: { type: Boolean },
        isPhone: { type: Boolean }
    }

    static styles = css`

      .flex {
        display: flex;
      }

      .flex-at {
        align-items: center
      }

      .flex-jc {
        justify-content: center
      }

      .flex-jcsb {
        justify-content: space-between
      }

        @media only screen and (min-width: 834px) {

            .main {
              height: 100%;
              width: 100%
            }

            .grid {
              display: grid;
              grid-template-rows: [uno] 5rem [dos] auto [tres] auto [cuatro];
              grid-template-columns: [uno] 100% [dos];
              gap: 0.5rem
            }

            .row {
              background-color: var(--primary_variant);
              width: 100%;
              height: 100%;
              border-radius: 1rem;
            }

            .row2 {
              background-color: rgba(19, 67, 75, 0.5);
              width: 100%;
              height: 100%;
              border-radius: 1rem
            }
            
            p {
              color: var(--background);
              font-size: var(--navigation2);
              margin-top: 1.5rem;
              padding-left: 1rem
            }

            .input {
              height: 75%;
              width: 98%;
              margin: 8px auto;
              background-color: var(--secondary);
              border-radius: 0.5rem
            }

            input {
              color: var(--background);
              padding: 0.3rem;
              background-color: var(--secondary);
              outline: none;
              border: none;
              font-size: var(--navigation2);
              font-family: var(--font);
              padding-left: 2rem
            }

            svg#search {
              margin-left: 2rem
            }

        }
    `;

    firstUpdated() {
      const input = this.shadowRoot.querySelector('#inputsearch')
      input.value = 'Search Artist / Album'
      this.obtenerAlbums()
      this.obtenerArtists()
    }

    async obtenerAlbums() {
      const albums = await GetAlbums()
      console.log(albums)
    }

    async obtenerArtists() {
      const artist = await GetArtsits()
      console.log(artist)
    }

    changeinput(evnt) {
      
      const input = this.shadowRoot.querySelector('#inputsearch')
      
      if (evnt.type === 'focus') {
        
        if (input.value === 'Search Artist / Album') {
          input.value = '';
        }
      } else if (evnt.type === 'blur') {
        
        if (input.value === '') {
          input.value = 'Search Artist / Album';
        }
      }
      
    }
    
    render() {
        return html`
            <div class="main grid">
              <div class="row">
                <div class="input flex flex-at">
                  <svg id="search" width="24" height="24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11a7 7 0 1 1 12.041 4.857 1.009 1.009 0 0 0-.185.184A7 7 0 0 1 4 11Zm12.618 7.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675Z" fill="#fff"/>
                  </svg>
                  <input id="inputsearch" type="text" @focus=${(evnt) => this.changeinput(evnt)} @blur=${(evnt) => this.changeinput(evnt)}>
                </div>
              </div>
              <div class="row2">
                <p>Artists :</p>

              </div>
              <div class="row2">
                <p>Albums :</p>

              </div>
            </div>
        `;
    }
}

customElements.define('artist-view', ArtistView);