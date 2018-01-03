const User = function createUserClass() {
  allUsers = []


  return class User {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
      this.profile_pic_url = data.profile_pic_url
      allUsers.push(this)
    }


  static all() {
    return [...allUsers]
  }

  static renderProfile(data){


  document.getElementById('main').innerHTML =
  `
    
    <nav id="navbar" class="teal">
     <div class="nav-wrapper">
       <a href="#!" class="brand-logo center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" width="200px" height="200px" class="circle responsive-img"></a>

       <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab"><a href="#test1">Test 1</a></li>
          <li class="tab"><a class="active" href="#test2">Test 2</a></li>
          <li class="tab"><a href="#test4">Test 3</a></li>
        </ul>
      </div>

     </div>
   </nav>
    <div class="container" id="test2" style="margin-top:20%">
      <div class="row" id="all-pizzas">
      </div>
    </div>`

    User.renderPizzaCard(data)
    }

    static renderPizzaCard(data) {
      let userPizzas = document.getElementById('all-pizzas');
      data.pizzas.forEach(function(pizza) {
        let pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('col');
        pizzaDiv.classList.add('s4');
        pizzaDiv.innerHTML = `
          <div class="card darken-1">
            <div class="card-image">
              <img src="${pizza.pizza_url}">
            </div>
            <div class="card-content black-text" id="pizza${pizza.id}">
              <h4>${pizza.restaurant_name} | ${pizza.tally} Upvotes</h4>
            </div>
          </div>
        </div>`
        userPizzas.appendChild(pizzaDiv)
        User.renderPizzaComments(pizza, pizza.id)
      })
    }

    static renderPizzaComments(data, id){
      let pTag = document.createElement('p')
      data.comments.forEach(function(pizza){
        let p = document.createElement('p')
        p.innerText = pizza.content
        p.innerHTML += "<br> <br>"
        document.getElementById('pizza'+id).appendChild(p)
      })
    }
  }
}()
