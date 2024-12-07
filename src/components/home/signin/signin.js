/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-lonely-if */
/* eslint-disable no-alert */
import { LitElement, html, css } from 'lit';
import { LoginDataArtist, LoginDataUser, GetUsersByEmail, GetArtsits } from '../../../api/callapi.js'

export class SignInView extends LitElement {

    static properties = {
        input: { type: String },
        usertype: { type: String },
        isDesktop: { type: Boolean }
    }

    constructor() {
        super()
        this.input = 'Email.....'
        this.usertype = 'usuario'
        this.isDesktop = true
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

        .flex-jcc {
            justify-content: center
        }

        .main {
            padding: 2rem;
            height: 100%
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

            .ctnsi {
                height: 100%;
                width: 100%;
            }

            .icon {
                width: 150px;
                height: 150px;
                border-radius: 2rem;
                background: linear-gradient(155deg, var(--primary) 65%, var(--primary_variant) 100%);
            }

            .login {
                height: 100%;
                width: 50rem;
            }

            .intro {
                width: 100%;
                height: 3.5rem;
                color: var(--background);
                text-align: center;
                font-size: var(--heading3);
                margin: 0.5rem auto;
            }

            .intro2 {
                width: 100%;
                height: 3.5rem;
                color: var(--background);
                text-align: center;
                font-size: var(--heading3);
                margin: 0.5rem auto;
                margin-bottom: 4.7rem;
            }

            input#email, input#password {
                display: block;
                margin-top: 2rem;
                margin-bottom: 2rem;
                width: 40rem;
                outline: none;
                border: none;
                color: rgba(255,255,255,1);
                background-color: var(--primary_variant);
                border-radius: 0.7rem;
                font-family: var(--font);
                padding-left: 1rem;
                padding-top: 0.4rem;
                padding-bottom: 0.4rem;
                font-size: var(--navigation2)
            }

            input#email {
                margin-top: 2rem
            }

            button#SignIn {
                display: block;
                margin: 0px auto;
                border-radius: 0.7rem;
                border: 2px solid var(--background);
                color: var(--background);
                background-color: var(--primary_variant);
                cursor: pointer;
                font-family: var(--font);
                font-size: var(--heading2);
                width: 15rem;
                height: 2.8rem
            }

            .select {
                width: 20rem;
                display: block;
                margin: 0px auto;
                height: 3rem;;
                margin-left: 0px;
                color: var(--background);
                background-color: var(--primary);
                border: none;
                outline: none;
                border-radius: 0.7rem;
                font-size: var(--navigation2);
                padding: 0.5rem;
                padding-left: 1.2rem
            }

        }

        @media only screen and (min-width: 430px) and (max-width: 842px) {

            .main {
                padding: 2rem;
                height: 100%
            }

            .ctnsi {
                height: 100%;
                width: 100%
            }

            .icon {
                width: 150px;
                height: 150px;
                border-radius: 2rem;
                background: linear-gradient(155deg, var(--primary) 65%, var(--primary_variant) 100%)
            }

            .login {
                height: 100%;
                width: 50rem
            }

            .intro {
                width: 100%;
                height: 3.5rem;
                color: var(--background);
                text-align: center;
                font-size: var(--heading);
                margin: 0.5rem auto
            }

            .intro2 {
                width: 100%;
                height: 3.5rem;
                color: var(--background);
                text-align: center;
                font-size: var(--heading);
                margin: 0.5rem auto;
                margin-bottom: 4.7rem
            }

            input#email, input#password {
                display: block;
                margin: 2rem auto;
                width: 100%;
                outline: none;
                border: none;
                color: rgba(255,255,255,1);
                background-color: var(--primary_variant);
                border-radius: 0.7rem;
                font-family: var(--font);
                padding-left: 1rem;
                padding-top: 0.4rem;
                padding-bottom: 0.4rem;
                font-size: var(--navigation2)
            }

            input#email {
                margin-top: 2rem
            }

            button#SignIn {
                display: block;
                margin: 0px auto;
                border-radius: 0.7rem;
                border: 2px solid var(--background);
                color: var(--background);
                background-color: var(--primary_variant);
                cursor: pointer;
                font-family: var(--font);
                font-size: var(--heading2);
                width: 15rem;
                height: 2.8rem
            }

            .select {
                width: 20rem;
                display: block;
                margin: 0px auto;
                height: 3rem;
                color: var(--background);
                background-color: var(--primary);
                border: none;
                outline: none;
                border-radius: 0.7rem;
                font-size: var(--navigation2);
                padding: 0.5rem;
                padding-left: 1.2rem;
                margin-bottom: 4rem
            }

            div#musicicon {
                margin: 1rem auto;
                margin-bottom: 2rem
            }

        }

        @media only screen and (max-width: 428px) { 
            .main {
                padding-top: 0.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                height: 100%
            }

            .ctnsi {
                height: 100%;
                width: 100%
            }

            .icon {
                width: 150px;
                height: 150px;
                border-radius: 2rem;
                background: linear-gradient(155deg, var(--primary) 65%, var(--primary_variant) 100%)
            }

            .login {
                height: 100%;
                width: 50rem;
                max-height: 100vh;
                overflow-y: auto
            }

            .login::-webkit-scrollbar {
                display: none; 
            }

            .intro {
                width: 100%;
                height: 2.5rem;
                color: var(--background);
                text-align: center;
                font-size: var(--heading2);
                margin: 0.5rem auto
            }

            .intro2 {
                width: 100%;
                height: 3.5rem;
                color: var(--background);
                text-align: center;
                font-size: var(--heading2);
                margin: 0.5rem auto;
                margin-bottom: 2rem
            }

            input#email, input#password {
                display: block;
                margin: 2rem auto;
                width: 100%;
                outline: none;
                border: none;
                color: rgba(255,255,255,1);
                background-color: var(--primary_variant);
                border-radius: 0.7rem;
                font-family: var(--font);
                padding-left: 1rem;
                padding-top: 0.4rem;
                padding-bottom: 0.4rem;
                font-size: var(--navigation2)
            }

            input#email {
                margin-top: 2rem
            }

            button#SignIn {
                display: block;
                margin: 0px auto;
                border-radius: 0.7rem;
                border: 2px solid var(--background);
                color: var(--background);
                background-color: var(--primary_variant);
                cursor: pointer;
                font-family: var(--font);
                font-size: var(--heading2);
                width: 15rem;
                height: 2.8rem
            }

            .select {
                width: 20rem;
                display: block;
                margin: 0px auto;
                height: 3rem;
                color: var(--background);
                background-color: var(--primary);
                border: none;
                outline: none;
                border-radius: 0.7rem;
                font-size: var(--navigation2);
                padding: 0.5rem;
                padding-left: 1.2rem;
                margin-bottom: 4rem
            }

            div#musicicon {
                margin: 1rem auto;
                margin-bottom: 2rem
            }
        }
    `;

    isEmpty(obj) {
        return Object.entries(obj).length === 0;
    }

    inputIsEmpty(string) {
        return string === ''
    }

    async btnclick() {

        let respuesta = ''
        const pw = this.shadowRoot.querySelector('#password')
        const email = this.shadowRoot.querySelector('#email')

        if (this.inputIsEmpty(pw.value) || this.inputIsEmpty(email.value)) return

        if (this.usertype === 'usuario') {
            respuesta = await LoginDataUser(email.value, pw.value)
            if (!respuesta.Message) {
                alert('No se han encontrado un usuario con este correo')
                pw.value = ''
                email.value = ''
            } else {

                if (respuesta.Message) {
                    const value = await GetUsersByEmail(email.value)

                    localStorage.setItem('isLogged', true)
                    localStorage.setItem('zone', 'home')
                    localStorage.setItem('userId', value.id_user)
                    localStorage.setItem('usuario', JSON.stringify(value))

                    this.dispatchEvent(new CustomEvent('signin-success', { bubbles: true, composed: true }))

                } else {
                    alert('No es la contraseña correcta ')
                    pw.value = ''
                    email.value = ''
                }
            }



        } else {
            respuesta = await LoginDataArtist(email.value, pw.value) // Aquí el email es el nombre
            if (this.isEmpty(respuesta)) {

                alert('No se han encontrado artistas con este nombre')
                pw.value = ''
                email.value = ''

            } else {

                if (respuesta.Message) {

                    const value = await GetArtsits(email.value)
                    localStorage.setItem('isLogged', true)
                    localStorage.setItem('zone', 'home')
                    localStorage.setItem('userId', value.id_artist)
                    localStorage.setItem('usuario', JSON.stringify(value))
                } else {
                    alert('No es la contraseña correcta ')
                    pw.value = ''
                    email.value = ''
                }
            }

        }

        this.requestUpdate()
    }

    changeinput() {
        const selectElement = this.shadowRoot.getElementById('type')
        const pw = this.shadowRoot.querySelector('#password')
        const email = this.shadowRoot.querySelector('#email')
        const selectedValue = selectElement.value

        if (selectedValue === 'usuario') {
            this.input = 'Email.....'
            email.value = ''
            pw.value = ''
            this.usertype = 'usuario'
        } else {
            this.input = 'Name.....'
            email.value = ''
            pw.value = ''
            this.usertype = 'artista'
        }

    }

    render() {
        return html`
            <div class="main">
                <div class="ctnsi flex flex-at flex-jc">
                    ${this.isDesktop ? html`
                            <div id="musicicon" class="icon flex flex-at flex-jcc">
                                <svg width="80" height="94" fill="none">
                                    <path d="M80 0 24 18.752v45a15.752 15.752 0 0 0-8-2.248c-8.792 0-16 7.2-16 16 0 8.784 7.208 16 16 16s16-7.216 16-16v-53L72 11v44.752a15.752 15.752 0 0 0-8-2.248c-8.792 0-16 7.2-16 16 0 8.784 7.208 16 16 16s16-7.216 16-16V0ZM64 61.504c4.464 0 8 3.528 8 8 0 4.464-3.536 8-8 8s-8-3.536-8-8c0-4.472 3.536-8 8-8Zm-48 8c4.464 0 8 3.528 8 8 0 4.464-3.536 8-8 8s-8-3.536-8-8c0-4.472 3.536-8 8-8Z" fill="#FFFFFF"/>
                                </svg>
                            </div>`
                : ''
            }
                    
                    <div class="login">
                        <h2 class="intro">Let the rhythm guide you. 🎶</h2>
                        <h2 class="intro2">Welcome to your musical sanctuary.</h2> 

                        ${this.isDesktop ? ''
                : html`
                                <div id="musicicon" class="icon flex flex-at flex-jcc">
                                    <svg width="80" height="94" fill="none">
                                        <path d="M80 0 24 18.752v45a15.752 15.752 0 0 0-8-2.248c-8.792 0-16 7.2-16 16 0 8.784 7.208 16 16 16s16-7.216 16-16v-53L72 11v44.752a15.752 15.752 0 0 0-8-2.248c-8.792 0-16 7.2-16 16 0 8.784 7.208 16 16 16s16-7.216 16-16V0ZM64 61.504c4.464 0 8 3.528 8 8 0 4.464-3.536 8-8 8s-8-3.536-8-8c0-4.472 3.536-8 8-8Zm-48 8c4.464 0 8 3.528 8 8 0 4.464-3.536 8-8 8s-8-3.536-8-8c0-4.472 3.536-8 8-8Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>`
            }

                        <select id="type" class="select" @change=${() => this.changeinput()}>
                            <option value="usuario">User</option>
                            <option value="astista">Artist</option>
                        </select>

                        <input placeholder="${this.input}" id="email" type="text">
                        <input placeholder="Password....." id="password" type="password">

                        <button id="SignIn" @click=${() => this.btnclick()}>
                            Sign In
                        </button>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('signin-view', SignInView);