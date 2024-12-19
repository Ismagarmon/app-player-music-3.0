import { LitElement, html, css } from 'lit';

export class PlayerComponent extends LitElement {

    static properties = {
        isExpanded: { type: Boolean },
        audio: { type: Audio },
        isPlaying: { type: Boolean },
        play: { type: String },
        pause: { type: String },
        volume: { type: Number },
        isMuted: { type: Boolean },
        volumenAuxiliar: { type: Number },
        songname: { type: String },
        artistname: { type: String },
        seconds: { type: Number },
        minutes: { type: Number },
        realtime: { type: String },
        songtime: { type: String },
        maxtime: { type: Number },
        mutepath: { type: String },
        unmutepath: { type: String },
        isMain: { type: Boolean },
        isOpen: { type: Boolean },
        isLeft: { type: Boolean },
        isHolding: { type: Boolean },
        srcImg: { type: String}
    }

    constructor() {
        super()

        this.isExpanded = true
        this.audio = new Audio()
        this.isPlaying = false
        this.pause = "M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6Zm1 16V5h2v14H7Zm7-16a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4Zm1 16V5h2v14h-2Z"
        this.play = "M4.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 4 21V3a1 1 0 0 1 .52-.878ZM6 4.832v14.336L17.15 12 6 4.832Z"
        this.isMuted = false
        this.volumen = 20
        this.volumenAuxiliar = 20
        this.audio.volume = 0.2
        this.artistname = 'Ismael'
        this.seconds = 0
        this.minutes = 0
        this.realtime = ''
        this.songtime = ''
        this.maxtime = 0
        this.audio.addEventListener('ended', this.onAudioEnded.bind(this))
        this.mutepath = 'M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121ZM10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92V7.08Zm13.707 1.212a1 1 0 0 1 0 1.414L21.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L20 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L18.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L20 10.586l2.293-2.293a1 1 0 0 1 1.414 0Z'
        this.unmutepath = 'M19.777 4.223a1 1 0 1 0-1.414 1.414 9 9 0 0 1 0 12.726 1 1 0 1 0 1.414 1.414 11 11 0 0 0 0-15.554Zm-3.53 3.53a1 1 0 1 0-1.414 1.414 4 4 0 0 1 0 5.656 1 1 0 1 0 1.414 1.414 6 6 0 0 0 0-8.484ZM12 5a1 1 0 0 0-1.625-.78L5.65 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.725 3.78A1 1 0 0 0 12 19V5ZM6.625 9.78 10 7.08v9.84l-3.375-2.7A1 1 0 0 0 6 14H3v-4h3a1 1 0 0 0 .625-.22Z'
        this.isMain = true
        this.isOpen = false
        this.isLeft = false
        this.isHolding = false
        this.srcImg = ''
        this.songname = localStorage.getItem('songname')
        if(this.songname.startsWith('"')) {
            this.songname = this.songname.slice(1,-1)
            console.log(this.songname)
        }
        
        this.unsubscribe = null
        this.handleChanges()
        this.interval2 = null
        this.interval = null
        this.audio.onerror = () => {
            this.errorAudioSrc()
        }
    }

    errorAudioSrc() {
        alert("La cancion necesita ser actualizada")
    }

    async handleChanges() {
        this.interval2 = setInterval(async () => {
            if(localStorage.getItem('songname') !== this.songname){
                this.isPlaying = false
                this.audio.pause()
                this.audio.src = `https://apimap-h4m5.onrender.com/song/name/${localStorage.getItem('songname').slice(1, -1)}`
                
                localStorage.setItem('songname', this.songname = localStorage.getItem('songname'))
                await this.audio.load()
                this.audio.addEventListener('loadedmetadata', () => {
                    this.maxtime = this.audio.duration
                    this.songtime = Math.floor(this.audio.duration % 60) < 10 ? `${Math.floor(this.audio.duration / 60)}: 0${Math.floor(this.audio.duration % 60)}` : `${Math.floor(this.audio.duration / 60)} : ${Math.floor(this.audio.duration % 60)}`
                })
    
                this.isPlaying = true
                this.audio.play()
            }

        },100)
    }

    disconnectedCallback() {
        clearInterval(this.interval2)
        clearInterval(this.interval)
        this.interval2 = null
        this.interval = null
        if (this.audio) {
            this.audio.pause();
            this.audio.src = ""
            this.audio.load()

        }

        

        this.isPlaying = false

        super.disconnectedCallback && super.disconnectedCallback()
    }

    static styles = css`

      .flex {
        display: flex
      }

      .flex-at {
        align-items: center
      }

      .flex-att {
        align-items: stretch;
        flex-direction: column
      }

      .flex-jc {
        justify-content: center
      }

      .flex-jcsa {
        justify-content: space-around
      }

      .flex-jcsb {
        justify-content: space-between
      }

      .flex-jcse {
        justify-content: space-evenly
      }

      .gap {
        gap: 1.2rem
      }

      .gflex {
        gap: 0.1rem
      }

      .t {
        transition: all 0.5s
      }

      .none {
        display: none
      }
        
        svg {
            cursor: pointer;
            transition: all .5s
        }

        @media only screen and (min-width: 834px) {

            .player {
                width: 19.62rem;
                height: 31.5rem;
                background: linear-gradient(180deg, var(--secondary) 10%, var(--primary_variant) 100%);
                border-radius: 1rem;
                border: 2px solid var(--primary);
                transition: all .5s
            }

            .control {
                position: absolute;
                bottom: 0px;
                height: 30%;
                width: 19.4rem;
                background-color: var(--secondary_variant);
                border-radius: 1rem
            }

            .rate {
                width: 100%;
                height: 3rem;
                
            }

            .volume {
                width: 100%;
                height: 3rem
            }

            .value {
                width: 2rem;
                display: inline-block;
                color: var(--background)
            }

            button {
                width: 50%;
                height: 2rem;
                background-color: var(--secondary_variant);
                border: none;
                cursor: pointer;
                font-family: var(--font);
                color: var(--background);
                border-radius: 1rem;
                border: 1px solid var(--background)
            }

            input#rangevolume {
                appearance: none;
                height: 4px;
                width: 40%;
                background: white;
                border-radius: 5px;
                outline: none;
                border: none;
                margin: 0rem 1rem
            }

            input#rangevolume::-moz-range-thumb, input#rangevolume::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                height: 12px;
                width: 12px;
                background: var(--primary);
                border-radius: 4rem;
                border: 1.5px solid white;
                cursor: pointer;
                transition: all .3s;
            }

            input#rangevolume::-moz-range-progress {
                background-color: var(--primary);
                width: 100%;
                height: 4px;
                border-bottom-left-radius: 1rem;
                border-top-left-radius: 1rem;
            }

            .drop {
                height: 2rem;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
                margin-left: -1.5rem
            }

            .playerp {
                color: var(--background);
                transition: all .5s
            }

            .rotate {
                transform: rotate(180deg)
            }

            .new.color {
                background-color: var(--secondary);
                border: none;
            }

            .infosong {
                width: 80%;
                height: 16rem;
                margin: 0px auto;
                text-align: center;
                color: var(--background);
            }

            img#infosong {
                width: 175px;
                height: 175px;
                border: 1px transparent;
                border-radius: 1rem;
                display: block;
                margin: 0px auto;
                margin-bottom: 0.5rem
            }

            .songname {
                width: 100%;
                margin: 0px auto;
                margin-bottom: 0.5rem;
                height: 3rem;
                font-size: var(--errormessage);
                overflow-x: hidden;
                overflow-y: hidden
            }

            h2#songname {
                width: 100%;
                overflow-x: visible;
                max-height: 2rem;
                white-space: nowrap;
            }

            .infotime {
                width: 100%;
                height: 3rem;
                color: var(--background)
            }

            input#time {
                appearance: none;
                height: 3px;
                width: 60%;
                background: white;
                border-radius: 5px;
                outline: none;
                border: none
            }

            input#time::-moz-range-thumb, input#rangevolume::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                height: 12px;
                width: 12px;
                background: var(--secondary);
                border-radius: 4rem;
                border: 1.5px solid white;
                cursor: pointer;
                transition: all .5s
            }

            input#time::-moz-range-progress {
                background-color: var(--primary);
                width: 100%;
                height: 3px;
                border-bottom-left-radius: 1rem;
                border-top-left-radius: 1rem
            }

            p#realtime {
                width: 2.8rem
            }

            .options {
                width: 4rem
            }

            p#artistName {
                margin: 0rem
            }
        }
    `


    togglestate() {

        if (this.audio.paused) {
            this.audio.play()
            this.isPlaying = true
            if (this.audio.currentTime === 0) {
                this.interval = setInterval(() => {
                    this.calculatetime()
                }, 200)
            }
        } else {
            this.audio.pause()
            this.isPlaying = false
        }

    }

    toggleplayer() {

        if (!this.isMain) {
            this.isExpanded = !this.isExpanded
            this.dispatchEvent(new CustomEvent('toggleplayer', { detail: { expanded: this.isExpanded }, bubbles: true, composed: true }))
        }
    }

    calculatetime() {

        this.shadowRoot.querySelector('#time').value = this.audio.currentTime

        this.minutes = Math.floor(this.audio.currentTime / 60)
        this.seconds = Math.floor(this.audio.currentTime % 60)
        if (this.seconds < 10) {
            this.realtime = `${this.minutes} : 0${this.seconds}`
        }
        else {
            this.realtime = `${this.minutes} : ${this.seconds}`
        }

    }

    async loadsong() {
        this.audio.src = `https://apimap-h4m5.onrender.com/song/name/${this.songname}`
        await this.audio.load()
        this.audio.addEventListener('loadedmetadata', () => {
            this.maxtime = this.audio.duration
            this.songtime = Math.floor(this.audio.duration % 60) < 10 ? `${Math.floor(this.audio.duration / 60)}: 0${Math.floor(this.audio.duration % 60)}` : `${Math.floor(this.audio.duration / 60)} : ${Math.floor(this.audio.duration % 60)}`
        })

    }

    async firstUpdated() {

        this.interval = setInterval(() => {
            this.calculatetime()
        }, 300)

        const svgplay = this.shadowRoot.querySelector('#play-pause')
        svgplay.addEventListener('click', () => this.togglestate())

        const dropplayer = this.shadowRoot.querySelector('#dropplayer')
        dropplayer.addEventListener('click', () => this.toggleplayer())

        const muteicon = this.shadowRoot.querySelector('#volumensvg')
        muteicon.addEventListener('click', () => this.mute())

        const rewind = this.shadowRoot.querySelector('#rewind')
        rewind.addEventListener('click', () => this.rewind())

        const forward = this.shadowRoot.querySelector('#forward')
        forward.addEventListener('click', () => this.fordward())

        this.loadsong()

    }

    fordward() {
        const inputvolume = this.shadowRoot.querySelector('#time')
        inputvolume.value = this.maxtime
        this.realtime = this.maxtime
        this.audio.pause()
        this.isPlaying = false
    }

    rewind() {
        this.audio.currentTime = 0
        this.realtime = '0:00'
        this.audio.play()
        this.isPlaying = true
    }

    changevolume() {

        const inputvolume = this.shadowRoot.querySelector('#rangevolume')

        const volume = parseInt(inputvolume.value)

        this.audio.volume = volume / 100
        this.volumen = volume
        this.volumenAuxiliar = this.volumen

        if (this.audio.volume > 0) {
            this.isMuted = false
        } else {
            this.isMuted = true
        }

    }

    updatetime() {

        const inputvolume = this.shadowRoot.querySelector('#time')
        const time = parseInt(inputvolume.value)

        this.audio.currentTime = time
        this.calculatetime()

    }

    onAudioEnded() {
        this.audio.currentTime = 0
        this.shadowRoot.querySelector('#time').value = 0
        this.isPlaying = false
        this.calculatetime()
        clearInterval(this.interval)

    }

    mute() {

        const inputvolume = this.shadowRoot.querySelector('#rangevolume')

        if (this.audio.volume > 0) {
            this.audio.volume = 0
            inputvolume.value = '0'
            this.isMuted = true
            this.volumenAuxiliar = this.volumen
            this.volumen = 0
        } else {
            this.audio.volume = this.volumenAuxiliar / 100
            inputvolume.value = this.volumenAuxiliar.toString()
            this.isMuted = false
            this.volumen = this.volumenAuxiliar
        }
    }

    messageAlert() {
        alert("Implemented in a future")
    }

    render() {
        return html`
            <div class="player ${this.isExpanded ? '' : 'new-color'}">
                <div class="drop flex flex-at flex-jcsa t">
                    <p class="playerp">Player</p>

                    <div class="options flex flex-at  ${this.isOpen ? 'flex-jcsb' : 'flex-jc'}" >

                        <svg width="24" height="24" fill="none" class="${this.isExpanded ? '' : 'rotate'}" id="dropplayer">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z" fill="#fff"/>
                        </svg>

                    </div>
        
                    <svg width="24" height="24" fill="white"><g clip-path="url(#playlist 1__a)" fill="#fff">
                        <path d="M2.25 3h7.5a1.5 1.5 0 0 0 0-3h-7.5a1.5 1.5 0 0 0 0 3Zm0 4.5h7.5a1.5 1.5 0 0 0 0-3h-7.5a1.5 1.5 0 0 0 0 3Zm9 3A1.5 1.5 0 0 0 9.75 9h-7.5a1.5 1.5 0 0 0 0 3h7.5a1.5 1.5 0 0 0 1.5-1.5Z"/>
                        <path d="M19.281 3.558c-.857-.66-2.031-1.567-2.031-2.058a1.5 1.5 0 0 0-3 0v13.762a4.48 4.48 0 0 0-1.5-.262 4.5 4.5 0 1 0 4.5 4.5V5.78c.066.05.132.103.198.154 1.693 1.305 2.802 2.253 2.802 3.483 0 1.91-1.016 2.977-1.046 3.008a1.5 1.5 0 1 0 2.091 2.15c.2-.194 1.955-1.99 1.955-5.158 0-2.796-2.2-4.494-3.969-5.859Z"/></g><defs><clipPath id="playlist 1__a">
                        <path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
                    </svg>
                    
                    
                </div>

                <div class="infosong">
                    <img alt="logo" src="${this.srcImg}" id="infosong">
                    <div class="songname">
                        <h2 id="songname">${this.songname}</h2>
                    </div>
                    
                    <p id="artistName">${this.artistname}</p>
                </div>

                <div class="infotime flex flex-at flex-jcsa">
                    <p id="realtime">${this.realtime}</p>
                    <input id="time" type="range" min="0" max=${this.maxtime} value=${this.audio.currentTime} step="1" @input=${() => this.updatetime()}>
                    <p>${this.songtime}</p>
                </div>

                <div class="control flex flex-att gap">
                    <div class="rate flex flex-at flex-jc">
                        <button class="flex flex-at flex-jcsa" @click=${() => this.messageAlert()}>
                            <p>Rate this song</p>
                            <svg width="20" height="20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.405 1.328a.833.833 0 0 1 .762-.495A3.333 3.333 0 0 1 12.5 4.167v2.5h3.879a2.5 2.5 0 0 1 2.495 2.875l-1.15 7.5a2.501 2.501 0 0 1-2.495 2.125H3.333a2.5 2.5 0 0 1-2.5-2.5v-5.834a2.5 2.5 0 0 1 2.5-2.5h1.959l3.113-7.005ZM6.667 9.343 9.673 2.58a1.667 1.667 0 0 1 1.16 1.588V7.5c0 .46.373.833.834.833h4.726a.833.833 0 0 1 .833.958l-1.15 7.5a.833.833 0 0 1-.833.709H6.667V9.343ZM5 17.5V10H3.333a.833.833 0 0 0-.833.833v5.834a.833.833 0 0 0 .833.833H5Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="icons flex flex-at flex-jcsa">

                        <svg width="24" height="24" fill="white" id="rewind" >
                            <g clip-path="url(#fast_rewind__a)">
                                <path d="M11 18V6l-8.5 6 8.5 6Zm.5-6 8.5 6V6l-8.5 6Z" fill="#fff"/>
                            </g><defs><clipPath id="fast_rewind__a">
                                <path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
                        </svg>

                        <svg width="24" height="24" fill="white" id="play-pause">
                            <path fill-rule="evenodd" clip-rule="evenodd" d=${this.isPlaying ? this.pause : this.play} fill="#fff"/>
                        </svg>
                 
                        <svg width="24" height="24" fill="white" id="forward" style="visibility: hidden">  <g clip-path="url(#fast_forward__a)">
                            <path d="m4 18 8.5-6L4 6v12Zm9-12v12l8.5-6L13 6Z" fill="#fff"/></g><defs><clipPath id="fast_forward__a">
                            <path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
                        </svg>

                    </div>
                    <div class="volume flex flex-at flex-jc">

                        <svg width="33" height="21" viewBox="0 0 25 25" id="volumensvg">
                            <path fill="white" d="${this.isMuted ? this.mutepath : this.unmutepath}"></path>
                        </svg>

                        <input id="rangevolume" type="range" min="0" max="100" value="20" step="1" @input=${() => this.changevolume()}>
                        <div class="value">${this.volumen}</div>
                    </div>
                </div>
                <div>
                    
                    
                </div>
            </div>
        `
    }
}

customElements.define('player-component', PlayerComponent)