/* eslint-disable no-alert */
/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import useStore from '../../../container/StoreZustand'
import { DeleteUser, GetUsers, UpdateDataUser } from '../../../api/callapi';
import logo from '../../../img/Personal.jpg'

export class ProfileView extends LitElement {

  static properties = {
    username: { type: String },
    usertype: { type: String },
    fechacc: { type: Date },
    isEdit: { type: Boolean },
    user: { type: Object },
    arrayusers: { type: Array},
    isArray: { type: Boolean}
  }

  constructor() {
    super()

    this.isArray = false
    this.arrayusers = []
    this.isOpened = false
    this.fechacc = '29/05/2024'
    this.isEdit = false
    this.getUserData()
  }

  async getUserData() {
    this.user = JSON.parse(localStorage.getItem('usuario'))
    if (this.user.id_user === 1) {
      this.usertype = 'Admin'
      this.obtenerUsuarios()
    } else {
      this.usertype = 'User / Artist'
    }

    this.username = this.user.username
  }

  async obtenerUsuarios() {
    this.arrayusers = await GetUsers()
    this.isArray = true
  }

  static styles = css`

      .flex {
        display: flex
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

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0px;
        margin: 0px;
      }

      button {
          cursor: pointer;
      }

        @media only screen and (min-width: 834px) {

            .main {
              height: 100%;
              width: 100%
            }

            .grid {
              display: grid;
              grid-template-rows: [uno] auto [dos] auto [tres];
              grid-template-columns: [uno] 100% [dos];
              gap: 0.5rem
            }

            .row2 {
              background-color: rgba(19, 67, 75, 0.5);
              width: 100%;
              height: 100%;
              border-radius: 1rem;
              overflow-y: scroll
            }
            
            p {
              color: var(--background);
              font-size: var(--navigation2)
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

            .infoprofile {
              height: 100%;
              width: 100%;
              padding-left: 5rem;
              position: relative
            }

            .ctn2 {
              cursor: pointer;
            }

            img#appicon {
              width: 100px;
              height: 100px;
              display: block
            }

            .m-w {
              min-width: 13rem
            }

            .gap-l {
              gap: 15px
            }

            .prueba {
              font-size: var(--navigation2);
              min-width: 12rem;
              font-weight: 1000;
              color: var(--background)
            }

            button {
              width: 11rem;
              height: 3rem;
              background-color: var(--primary_variant);
              border: 2px solid var(--background);
              border-radius: 2rem;
              color: var(--background)
            }

            p {
              font-family: var(--font);
              color: var(--background);
              font-size: var(--navigation1)
            }

            img#profileimg {
              width: 200px;
              height: 200px;
              margin-right: 2rem;
              border-radius: 10rem;
              border: 0.3rem solid var(--background)
            }

            .personalinfoapp {
              width: 100%;
              height: 15rem;
              color: var(--background);
              position: relative
            }

            h2 {
              font-size: var(--heading3);
              margin-bottom: 2rem
            }

            h4 {
              font-size: var(--navigation2);
              font-weight: 500;
              margin-bottom: 1rem
            }

            button#imgup, button#imgde {
              border-radius: 0.3rem;
              border: none;
              width: 13rem;
              position: absolute;
              bottom: 0rem;
              left: 0rem;
              box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.7);
              transition: box-shadow 0.3s ease;
              transition: all 0.3s
            }

            button#imgde {
              position: absolute;
              bottom: 0rem;
              left: 14rem
            }

            svg#imgup {
              color: var(--good)
            }

            button#imgup:active, button#imgde:active {
              transform: translateY(5px)
            }

            button#logout {
              position: absolute;
              right: 1rem;
              top: 1rem;
              width: 12rem;
              height: 3rem;
              border-radius: 0.2rem;
              background-color: var(--secondary)
            }

            .personalinfo {
              width: 100%;
              height: 100%;
              padding-left: 9rem
            }

            p#pd {
              font-size: var(--heading2);
              margin-top: 1.5rem;
              margin-bottom: 1.5rem
            }

            .form {
              width: 90rem;
              height: 19rem;
              color: var(--background)
            }

            .form input {
              width: 15rem;
              height: 3rem;
              color: var(--background);
              font-family: var(--font);
              font-size: var(--navigation2);
              background-color: var(--secondary);
              border-radius: 0.2rem;
              border: none;
              padding-left: 1rem;
              margin-left: 1rem;
              margin-bottom: 2rem;
              margin-right: 1rem;
              margin-top: 2rem;
              outline: none
            }

            .editinfo {
              border-radius: 0.2rem;
              border: none;
              width: 10rem;
              border: 1px solid var(--background);
              margin-top: 0.9rem
            }

            .gridformulario {
              display: grid;
              grid-template-rows: [uno] 5rem [dos] 5rem [tres] 5rem [cuatro];
              grid-template-columns: [uno] auto [dos] auto [tres] auto [cuatro]
            }

            .inputs {
              width: 100%;
              height: 15rem
            }

            .deletezone {
              width: 100%;
              margin: 0px auto;
              margin-top: 2rem;
              min-height:9rem;
              overflow-y: auto
            }

            h2#users {
              margin: 0px auto;
              margin-bottom: 3rem;
              text-align: center
            }

            table {
              width: 100%;
              height: 3rem;
              overflow-y: visible
            }

            td {
              text-align: center
            }

            th { 
              border-left: 2px solid var(--background)
            }

            button#update, button#delete {
              width: 7rem;
              height: 3rem;
              background-color: var(--primary_variant);
              border: 2px solid var(--background);
              border-radius: 0.2rem;
              color: var(--background);
              margin-bottom: 2rem;
              margin-top: 2rem
            }

            td#operations, th#operations {
              width: 20rem;
            }
        }
    `;


  logout() {
    useStore.getState().logout({
      isLogged: false,
      userId: null,
      username: null,
      usuario: null
    })
    
    this.dispatchEvent(new CustomEvent('logout', { detail: { logout: true }, bubbles: true, composed: true }))
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

  regexage(age) {
    if(age === 0) return false
    const regex = /^[0-9][0-9]$/
    return regex.test(age)
}

  async updateUser() {

    const username = this.shadowRoot.querySelector('#username').value
    const name = this.shadowRoot.querySelector('#name').value
    const surnames = this.shadowRoot.querySelector('#surnames').value
    const age = this.shadowRoot.querySelector('#age').value
    const country = this.shadowRoot.querySelector('#country').value
    const city = this.shadowRoot.querySelector('#city').value

    if ( this.regexusername(username) && this.regexname(name) && this.regexage(age) ) {
      const respuesta = await UpdateDataUser(name,surnames,username,age,city,country,this.user.id_user)
      if(respuesta.Message){
        alert('El usuario se ha actualizado correctamente')
        this.user = JSON.parse(localStorage.getItem('usuario'))
        this.user.username = username
        this.user.name = name
        this.user.surnames = surnames
        this.user.country = country
        this.user.city = city
        localStorage.setItem('usuario', JSON.stringify(this.user))
      } else {
        alert('El usuario no se ha actualizado correctamente')
      }
    } else {
      alert("No se cumplen con las expresiones en los campos")
    }

    
  }

  async deleteUser(id) {
    if(id !== 1) {
      const deleteUser = await DeleteUser(id)
      if(deleteUser.Message){
        alert('Has eliminado el usuario correctamente')
      }
      this.obtenerUsuarios()
    } else {
      alert('No te puedes eliminar a ti mismo')
    }

  }

  handleFileUpload(event) {
    const file = event.target.files[0]
    if (!file) return

    if (file.size > 2 * 1024 * 1024) {
      alert('La imagen debe ser menor a 2MB.')
      return
    }

    const formData = new FormData()
    formData.append('image', file)

  }

  render() {
    return html`
            <div class="main grid">
                <div class="row2 infoprofile flex flex-at">

                    <img alt="personalimg" src="${this.usertype.includes('Admin') ? logo : ''}" id="profileimg">

                    <div class="personalinfoapp">
                        <h2>${this.username}</h2>
                        <h4>Type of user: ${this.usertype}</h4>

                    </div>
                    <button id="logout" @click=${() => this.logout()} class="flex flex-at flex-jc">
                      <p>Log Out</p>
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"/>
                      </svg>
                    </button>
                </div>

                <div class=" row2 personalinfo">
                    <p id="pd">Personal Data:</p>
                    <div class="form">
                        <div class="inputs gridformulario">
                            <div class="flex flex-at flex-jc">
                                <p>Username:</p> <input type="text" id="username" class="${this.isEdit ? 'editinput' : ''}" value=${this.user.username}>
                            </div>
                            <div class="flex flex-at flex-jc">
                                <p>Password:</p>  <input type="password" class="${this.isEdit ? 'editinput' : ''}" value=${this.user.password}>
                            </div>
                            <div class="flex flex-at flex-jc">
                              <p>Email:</p>  <input type="text" id="email" class="${this.isEdit ? 'editinput' : ''}" value=${this.user.email}>
                            </div>
                            <div class="flex flex-at flex-jc">
                              <p>Name:</p> <input type="text" id="name" class="${this.isEdit ? 'editinput' : ''}" value=${this.user.name}>
                            </div>
                            <div class="flex flex-at flex-jc">
                              <p>Surnames:</p> <input type="text" id="surnames" class="${this.isEdit ? 'editinput' : ''}" value=${this.user.surnames}>
                            </div>
                            <div class="flex flex-at flex-jc">
                              <p>Age:</p> <input type="text" id="age" readonly value=${this.user.age}>
                            </div>
                            <div class="flex flex-at flex-jc">
                              <p>Country:</p> <input type="text" id="country" class="${this.isEdit ? 'editinput' : ''}" value=${this.user.country}>
                            </div>
                            <div class="flex flex-at flex-jc">
                              <p>City:</p> <input type="text" id="city" class="${this.isEdit ? 'editinput' : ''}" value=${this.user.city}>
                            </div>
                            <div class="flex flex-at flex-jc">
                              <p>Account Created:</p> <input type="text" readonly value=${this.user.accountcreated.substring(0, 10)}>
                            </div>
            
                        </div>

                        <button class="editinfo flex flex-at flex-jc" @click=${() => this.updateUser()}>
                            <p>Save</p>
                            <svg width="25" height="25" viewBox="0 0 20 20">
                                <path fill="white" d="m2.292 13.36l4.523 4.756L.5 20zM12.705 2.412l4.522 4.755L7.266 17.64l-4.523-4.754zM16.142.348l2.976 3.129c.807.848.086 1.613.086 1.613l-1.521 1.6l-4.524-4.757L14.68.334l.02-.019c.119-.112.776-.668 1.443.033"/>
                            </svg>
                        </button>
                        ${this.user.id_user === 1 
                          ? 
                            html`
                            <div class="deletezone">
                              <h2 id="users">Users</h2>
                              <table class="user">
                                <thead>
                                  <tr id="head">
                                    <th>Name</th>
                                    <th>Surnames</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Account Created</th>
                                    <th id="operations">Options</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  ${ this.isArray ? 
                                    
                                    html`
                                    ${this.arrayusers.map( user => 

                                        html`


                                          <tr>
                                            <td>
                                              ${user.name}
                                            </td>
                                            <td>
                                              ${user.surnames}
                                            </td>
                                            <td>
                                              ${user.username}
                                            </td>
                                            <td>
                                              ${user.email}
                                            </td>
                                            <td>
                                              ${user.accountcreated.substring(0,10)}
                                            </td>
                                            <td class="flex flex-at flex-jccc" id="operations">
                                              <button class="flex flex-at flex-jc" id="delete" @click=${() => this.deleteUser(user.id_user) }>
                                                <p>Delete</p>
                                                <svg width="25" height="25" viewBox="0 0 24 24">
                                                  <path fill="red" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/>
                                                </svg>
                                              </button>
                                            </td>
                                          </tr>
                                        `

                                      )}
                                    `

                                    : 
                                    
                                    html`` 

                                  }
                                </tbody>
                              </table>
                            </div>
                            ` 
                          : 
                            html``
                        }
                        
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define('profile-view', ProfileView);