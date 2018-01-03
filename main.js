
class App {
  static init() {

    const hosturl = 'http://192.168.2.84:3000/'

    // grabbing elements already on page

    // setting up event listeners
    document.body.addEventListener('submit', (event) => App.handleEventListeners(event, hosturl))


  }

  static handleEventListeners(event, hosturl) {
    event.preventDefault()
    console.log('hi')
    if (event.target.className === 'login_form') {
        let name = event.target.querySelector('[name=first_name]').value
        let email = event.target.querySelector('[name=email]').value
        Adapter.findUser(name, email, hosturl).then(function(userData) {
          document.getElementById('main').innerHTML = ''
          User.renderProfile(userData)
          document.getElementById('main').innerHTML += `
            <div id="test1">
              <h1>TEST1</h1>
            </div>
          `
          //console.log(userData)
        })
    } else if (event.target.className === ''){

    }

  }
}





document.addEventListener('DOMContentLoaded', App.init)
