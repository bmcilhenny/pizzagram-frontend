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


  
      User.renderPizzaCard(data)
      }

      static renderPizzaCard(data) {
        let userPizzas = document.getElementById('test1')
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
        data.comments.forEach(function(comment){
          let p = document.createElement('p')
          p.innerText = `${comment.content} -${comment.user_name}`
          console.log(comment)
          p.innerHTML += "<br> <br>"
          document.getElementById('pizza'+id).appendChild(p)
        })
      }
    }
}()
