class Adapter {

  static getAllUsers() {
    return fetch('https://localhost:3000/api/v1/users')
    .then(resp => resp.json())
  }

  static createUser(name, email, hosturl, profile_pic_url = null) {
    let fullURL = hosturl + '/api/v1/users'

    return fetch(fullURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, profile_pic_url:  profile_pic_url})
    }).then(res => res.json())
  }

  static findUser(name, email, hosturl){
    console.log('test')
    let fullURL = hosturl + '/api/v1/login'

    return fetch(fullURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name: name, email: email})
    }).then(res => res.json())
  }
}
