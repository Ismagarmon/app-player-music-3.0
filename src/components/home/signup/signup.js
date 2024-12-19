/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lonely-if */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import { RegisterDataArtist, RegisterDataUser, GetUsers, GetArtsits } from '../../../api/callapi';

export class SignUpView extends LitElement {

    static properties = {
        input: { type: String },
        usertype: { type: String },
        isDesktop: { type: Boolean },
        message: { type: String },
        isIpad: { type: Boolean },
        isPhone: { type: Boolean },
        messagepass: { type: String },
        messageusername: { type: String },
        messageemail: { type: String },
        emailHTMLDiv: { type: HTMLElement },
        passHTMLDiv: { type: HTMLElement },
        usernameHTMLDiv: { type: HTMLElement },
        nameHTMLDiv: { type: HTMLElement }
    }

    constructor() {
        super()
        this.input = 'Username.....'
        this.usertype = 'usuario'
        this.isDesktop = true
        this.isPhone = false
        this.isIpad = false


        this.messagepass = 'The password is incorrect'
        this.messageusername = 'The username is incorrect'
        this.messageemail = 'The email is incorrect'
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

        .none {
            display: none;
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
                background: linear-gradient(155deg, var(--primary) 70%, var(--primary_variant) 100%)
            }

            .register {
                height: 100%;
                width: 50rem;
            }

            .select {
                width: 20rem;
                display: block;
                margin: 0px auto;
                height: 3rem;
                margin-left: 0px;
                color: var(--background);
                background-color: var(--primary);
                border: none;
                outline: none;
                border-radius: 0.7rem;
                font-size: var(--navigation2);
                padding: 0.5rem;
                padding-left: 1.2rem;
                margin-top: 5rem
            }

            input#username, input#password, input#cpassword, input#email {
                display: block;
                margin-top: 2rem;
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

            input#username {
                margin-top: 3rem
            }

            input#cpassword {
                margin-bottom: 3rem
            }

            button#register {
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

            .messageinfoemail {
                position: absolute;
                top: 50%;
                right: 50%;
                width: 10rem;
                height: 5rem;
            }

            .messageinfousername {
                position: absolute;
                top: 50%;
                right: 50%;
                width: 10rem;
                height: 5rem;
            }

            .messageinfopass {
                position: absolute;
                top: 50%;
                right: 50%;
                width: 10rem;
                height: 5rem;
            }

            .messageinfoname {
                position: absolute;
                top: 50%;
                right: 50%;
                width: 10rem;
                height: 5rem;
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

            .register {
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

            input#username, input#password, input#cpassword, input#email {
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

            button#register {
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

            input#username {
                margin-top: 3rem
            }

            input#cpassword {
                margin-bottom: 3rem
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
                padding-left: 1.2rem
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

            .register {
                height: 100%;
                width: 50rem;
                max-height: 100vh;
                overflow-y: auto
            }

            .intro {
                width: 100%;
                height: 2.5rem;
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
                margin-bottom: 2rem
            }

            input#username, input#password, input#cpassword, input#email {
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

            button#register {
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

            input#username {
                margin-top: 3rem
            }

            input#cpassword {
                margin-bottom: 3rem
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
                padding-left: 1.2rem
            }

            div#musicicon {
                margin: 1rem auto;
                margin-bottom: 2rem
            }

        }
    `;

    changeinput() {
        const selectElement = this.shadowRoot.getElementById('type')
        const input = this.shadowRoot.getElementById('username')
        const selectedValue = selectElement.value

        if (selectedValue === 'usuario') {
            this.input = 'Username.....'
            input.value = ''
            this.usertype = 'usuario'
        } else {
            this.input = 'Name.....'
            input.value = ''
            this.usertype = 'artista'
        }
    }

    inputIsEmpty(string) {
        return string === ''
    }

    isEmpty(obj) {
        if( obj === undefined) {
            return true
        } else {
            return false
        }
    }

    regexname(name) {
        const regex = /^[A-Za-z\s]+$/
        return regex.test(name)
    }

    regexusername(username) {
        const regex = /^[A-Za-z0-9_]{1,15}$/
        return regex.test(username)
    }

    regexpassword(pw) {
        const regex = /^[A-Za-z0-9\s\W]{8,}$/
        return regex.test(pw)
    }

    regexemail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.com$/
        return regex.test(email)
    }

    checkpw() {
        const pw = this.shadowRoot.querySelector('#password')
        const cpw = this.shadowRoot.querySelector('#cpassword')

        if (pw.value === cpw.value) {
            this.register()
        } else {
            alert('No coinciden las contraseñas')
        }
    }

    async register() {
        const selectElement = this.shadowRoot.getElementById('type')
        const selectedValue = selectElement.value

        let isUsername = false
        let isEmail = false

        let usuario = ''
        const pw = this.shadowRoot.querySelector('#password')
        const username = this.shadowRoot.querySelector('#username')
        const email = this.shadowRoot.querySelector('#email')
        const cpw = this.shadowRoot.querySelector('#cpassword')


        if (this.inputIsEmpty(pw.value) || this.inputIsEmpty(username.value) || this.inputIsEmpty(email.value)) return

        if (selectedValue === 'usuario') {

            if (!this.regexpassword(pw.value)) {
                alert("La contraseña tiene que tener al menos 8 caracteres, una minúscula, una mayúscula, un número y un símbolo.")
                return
            }

            if (!this.regexemail(email.value)) {
                alert("El correo no cumple con los requisitos.")
                return
            }

            if (!this.regexusername(username.value)) {
                alert("Solo se admiten letras y números hasta 15 caracteres.")
                return
            }

            if (this.regexemail(email.value) && this.regexpassword(pw.value) && this.regexusername(username.value)) {

                const users = await GetUsers()

                if (users) {
                    usuario = users.find(user => user.username === username.value)

                    if (usuario !== undefined) {
                        isUsername = true
                    }

                    usuario = users.find(user => user.email === email.value)

                    if (usuario !== undefined) {
                        isEmail = true
                    }

                }

                if (!isEmail && !isUsername) {

                    const respuesta = await RegisterDataUser(username.value, pw.value, email.value)

                    if (respuesta) {
                        alert('Te has registrado correctamente')
                        username.value = ''
                        pw.value = ''
                        email.value = ''
                        cpw.value = ''
                        localStorage.setItem('zone', 'signin')
                        this.dispatchEvent(new CustomEvent('togglesignin', { detail: { expanded: false }, bubbles: true, composed: true }))
                    }

                } else {

                    if (isUsername) {
                        alert('Ya existe un usuario con tu mismo username')
                    }

                    if (isEmail) {
                        alert('Ya existe un usuario con el mismo correo')
                    }

                }

            }

        } else {
            if (this.regexemail(email.value) && this.regexpassword(pw.value) && this.regexname(username.value)) {

                const respuesta = await GetArtsits()

                usuario = respuesta.find(user => user.name === username.value)

                usuario = respuesta.find(user => user.name === username.value)
                if (this.isEmpty(usuario)) {
                    
                    await RegisterDataArtist(username.value, pw.value, email.value)
                    alert('Te has registrado correctamente')
                    username.value = ''
                    pw.value = ''
                    email.value = ''
                    cpw.value = ''
                    localStorage.setItem('zone', 'signin')
                    this.dispatchEvent(new CustomEvent('togglesignin', { detail: { expanded: false }, bubbles: true, composed: true }))
                } else {
                    alert('No te has registrado correctamente')
                }
            }

        }

    }

    render() {
        return html`
            <div class="main">

                <div class="messageinfoemail none" id="messageinfoemail">
                    <p>${this.messageemail}</p>
                    <button>OK</button>
                </div>
                <div class="messageinfousername none" id="messageinfousername">
                    <p>${this.messageusername}</p>
                    <button>OK</button>
                </div>
                <div class="messageinfopass none" id="messageinfopass">
                    <p>${this.messagepass}</p>
                    <button>OK</button>
                </div>
                <div class="messageinfoname none" id="messageinfoname">
                    <p>${this.messageusername}</p>
                    <button>OK</button>
                </div>

                <div class="asegurar none" id="asegurar">
                    <p></p>
                </div>
                <div class="ctnsi flex flex-at flex-jc">
                    ${this.isDesktop ? html`
                            <div id="musicicon" class="icon flex flex-at flex-jcc">
                                <svg width="80" height="94" fill="none">
                                    <path d="M80 0 24 18.752v45a15.752 15.752 0 0 0-8-2.248c-8.792 0-16 7.2-16 16 0 8.784 7.208 16 16 16s16-7.216 16-16v-53L72 11v44.752a15.752 15.752 0 0 0-8-2.248c-8.792 0-16 7.2-16 16 0 8.784 7.208 16 16 16s16-7.216 16-16V0ZM64 61.504c4.464 0 8 3.528 8 8 0 4.464-3.536 8-8 8s-8-3.536-8-8c0-4.472 3.536-8 8-8Zm-48 8c4.464 0 8 3.528 8 8 0 4.464-3.536 8-8 8s-8-3.536-8-8c0-4.472 3.536-8 8-8Z" fill="#FFFFFF"/>
                                </svg>
                            </div>`
                : ''
            }
    
                    <div class="register">
    
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
                            
                        <input placeholder="${this.input}" id="username" type="text">
                        <input placeholder="Email....." id="email" type="text">
                        <input placeholder="Password....." id="password" type="password">
                        <input placeholder="Confirm password....." id="cpassword" type="password">
    
                        <button id="register" @click=${() => this.checkpw()}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
            `;
    }
}

customElements.define('signup-view', SignUpView);