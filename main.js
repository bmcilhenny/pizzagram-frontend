
class App {
  static init() {

    const hosturl = 'http://25.66.28.15:3000/'

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
          document.getElementById('test1').innerHTML = ''
          User.renderProfile(userData)
        })
    } else if (event.target.className === ''){

    }

  }
}





document.addEventListener('DOMContentLoaded', App.init)
