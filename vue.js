//This is similar to my last api assignment, but with a twist of the setup and punchline not matching up
//I did this because I wanted to differentiate the two projects a little more and I thought it was kinda funny
new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      message: null
    }
  },
  mounted () {
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      this.info = response.data.setup
    })

    .catch(error => {
      console.log(error)
    })

  },
  created () {
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      this.message = response.data.punchline
    })

    .catch(error => {
      console.log(error)
    })
  }
  
})
//one thing that I would have perferred is if I could get the setups and punchline to atleast make sense grammically,
//but I am not really sure if that is possible with this api

