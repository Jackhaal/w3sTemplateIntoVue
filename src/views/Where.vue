<template>
<div class="w3-container" id="where" style="padding-bottom:32px;">
  <div class="w3-content" style="max-width:700px">
    <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">WHERE TO FIND US</span></h5>
    <p>Find us at some address at some place.</p>
    <img src="https://w3schools.com/w3images/map.jpg" class="w3-image" style="width:100%">
    <p><span class="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
    <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
    <p><strong>Ce formulaire renvoie quelque-chose, Essayez-le !!!</strong></p>
    <form @submit="checkForm" action="/where" method="get">
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message"></p>
      <p><button class="w3-button w3-black" type="submit">SEND MESSAGE</button> </p>
    </form>

    <table v-show="currentUrl.Name" class="w3-table w3-white">
      <tr>
          <th>Name</th>
          <th>How many people</th>
          <th>Date</th>
          <th>Message</th>

      </tr>
      <tr>
          <td>{{currentUrl.Name}}</td>
          <td>{{currentUrl.People}}</td>
          <td>{{currentUrl.date}}</td>
          <td>{{currentUrl.Message}}</td>
      </tr>
    
    </table>
  </div>
</div>

</template>

<script>

export default {
    name: 'Where',
    info: null,
        data(){
        return{
            currentUrl : this.$route.query


        }
    },
   created: function(){

        

      },
      methods:{

      }
}
</script>

<style scoped>

</style>