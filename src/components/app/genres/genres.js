/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import  { GetGenres, GetSongsByGenre } from '../../../api/callapi.js'

export class GenresView extends LitElement {

  static properties = {
    arraygenres: { type: Array },
    arrayfull: { type: Boolean },
    arraysongs: { type: Array},
    arraysongsfull: { type: Boolean},
    cont: {type: Number }
  }

  constructor() {
    super()
    this.arraygenres = []
    this.arrayfull = false
    this.arraysongs= []
    this.arraysongsfull = false
    this.cont = 0
    this.loadgenres()
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

      .flex-w {
        flex-wrap: wrap
      }

        @media only screen and (min-width: 834px) {

            .main {
              height: 100%;
              width: 100%
            }

            .grid {
              display: grid;
              grid-template-rows: [uno] 15rem [dos] auto [tres];
              grid-template-columns: [uno] 100% [dos];
              gap: 0.5rem
            }

            .row {
              background-color: var(--primary_variant);
              width: 100%;
              height: 100%;
              border-radius: 1rem
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
              padding-left: 1rem;
              width: 4.9rem;
              display: inline-block
            }

            .input {
              height: 4rem;
              width: 98%;
              margin: 0.5rem auto;
              margin-bottom: 0.6rem;
              background-color: var(--secondary);
              border-radius: 0.3rem
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

            .filters {
              width: 100%;
              height: 10rem
            }

            .box {
              width: 95%;
              height: 8rem;
              overflow-y: scroll
            }

            .genre {
              width: 12rem;
              height: 2.5rem;
              margin-bottom: 1.4rem;
              border-radius: 1rem;
              cursor: pointer;
              padding: 0.2rem;
              margin-right: 0.4rem;
              color: var(--background);
              background-color: var(--on_background)
            }

            .selected {
              border: 2px solid var(--background)
            }
        }
    `;

  async loadgenres() {
    this.arraygenres = await GetGenres()
    console.log(this.arraygenres)
    this.arrayfull = true
  }

  changeinput(evnt) {

    const input = this.shadowRoot.querySelector('#inputsearch')
      
      if (evnt.type === 'focus') {
        
        if (input.value === 'Search Music') {
          input.value = '';
        }
      } else if (evnt.type === 'blur') {
        
        if (input.value === '') {
          input.value = 'Search Music'
        }
      }

  }

  async selectedGenre(name,id) {

    const div = this.shadowRoot.querySelector(`#${name}`)
    div.classList.add('selected')

    this.arraysongs = await GetSongsByGenre(id)
    this.arraysongsfull = true

    setTimeout(() => {
      div.classList.remove('selected')
    },2000)

  }

  render() {
    return html`
            <div class="main grid">
              <div class="row">
                <div class="input flex flex-at">
                  <svg id="search" width="24" height="24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11a7 7 0 1 1 12.041 4.857 1.009 1.009 0 0 0-.185.184A7 7 0 0 1 4 11Zm12.618 7.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675Z" fill="#fff"/>
                  </svg>
                  <input id="inputsearch" type="text" @focus=${(evnt) => this.changeinput(evnt)} @blur=${(evnt) => this.changeinput(evnt)} value="Search Music">
                </div>
                <div class="filters flex flex-at flex-jcsb">
                  <p>Filters :</p>
                  <div class="box flex flex-w">
                    ${this.arraygenres.map( value => { return html`<div class="genre flex flex-at flex-jccc" @click=${() => this.selectedGenre(value,value.id_genre)}>${ value.description }</div> ` })}
                  </div>
                </div>
                
              </div>
              <div class="row2">
                <p>Results :</p>
                
              </div>
            </div>
        `;
  }
}

customElements.define('genres-view', GenresView);