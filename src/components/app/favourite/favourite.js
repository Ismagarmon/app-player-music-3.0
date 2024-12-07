import { LitElement, html, css } from 'lit';
import '../boxsong/songbox'

export class FavouriteView extends LitElement {

  static properties = {
    isDesktop: { type: Boolean },
    isIpad: { type: Boolean },
    isPhone: { type: Boolean },
    username: { type: String },
    name: { type: String }
  }

  list = [
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
    {name: 'ASD', album: 'ASDASD', artist: 'LOLO', duration: '9'},
  ]

  constructor() {
    super()
    
    this.username = 'User'
    this.name = `Created By  < ${this.username} > `
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
              "fav fav";
              gap: 0.5rem;

            }

            .main {
              height: 100%;
              width: 100%;
            }

            .fav {
              grid-area: fav;
              width: 100%;
              max-height: 40.6rem;
              border-radius: 1rem;
              background-color: rgba(19, 67, 75, 0.5);
              position: relative;
              overflow-y: scroll
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

            .info h3 {
              margin-bottom: 4rem;
              margin-top: 1rem;
              font-size: var(--heading2)
            }

            .info p {
              font-size: var(--navigation2);
              margin-bottom: 1rem
            }

            .shuffle {
              border-radius: 0.5rem;
              background-color: var(--secondary);
              width: 10rem;
              height: 2.5rem;
              outline: none;
              border: 0.1rem solid var(--background);
              cursor: pointer;
              display: inline-block;
              margin-right: 0.5rem
            }

            button:active {
              transform: translateY(4px)
            }

            .shuffle p {
              margin-bottom: 0rem
            }

            img#heart {
              width: 17rem;
              height: 17rem;
              border-radius: 1rem
            }

            button#delete {
              display: inline-block;
            }

        }
    `;



  render() {
    return html`
            <div class="main gridhead">
              <div class="img">
                <img alt="Corazon" src="../../../assets/img/Heart.jpg" id="heart">
              </div>
              <div class="info">
                <h3>PLAYLIST</h3>
                <p>My Fav Songs</p>
                <p>${this.name}</p>
                <button class="shuffle flex flex-at flex-jc">
                  <p>Shuffle</p>
                </button>
                <button id="delete" class="shuffle flex flex-at flex-jc">
                  <p>Delete all songs</p>
                </button>
              </div>
              
              <div class="fav">
                ${this.list.map( (item) => html`<box-song .album=${item.album} .artist=${item.artist} .duration=${item.duration} .name=${item.name} ></box-song>` )}
              </div>
            </div>
        `;
  }
}

customElements.define('favourite-view', FavouriteView);