import { LitElement, html, css } from 'lit';


class AdminPanelView extends LitElement {

    static properties = {
        isDesktop: { type: Boolean },
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

      .flex-jcsa { 
        justify-content: space-around
      }

        @media only screen and (min-width: 834px) {

            .panel {
              height: 100%;
              width: 100%;
            }

        }
    `
    
    render() {
        return html`
            <div class="panel">
              
            </div>
        `
    }
}

customElements.define('admin-panel-view', AdminPanelView);