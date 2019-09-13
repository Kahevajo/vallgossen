<template>
  <section class="section">
    <h1 class="title">Bokning av rum</h1>
    <div class="content">
      <b-button @click="reset">
        Idag
      </b-button>
    </div>
    <div class="level">
      <a @click="changeDateOffset(-7)">
        <b-icon 
          icon="chevron-left"
          size="is-large">
        </b-icon>
      </a>
      <div class="level-item level">
        <div v-bind:key="day[0]" v-for="day in dates" class="level-item">
          <div class="content">
            <h3>{{day[0]}}</h3>
            <h4>{{day[1].getFullYear() + "-" + (day[1].getMonth()+1) + "-" + day[1].getDate()}}</h4>
            <div class="tile is-parent is-vertical">
              <div class="tile is-child notification is-primary">
                10:00<br/>
                12:00
              </div>
            </div>
          </div>
        </div>
      </div>
      <a @click="changeDateOffset(7)">
        <b-icon 
          icon="chevron-right"
          size="is-large">
        </b-icon>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      week: ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"],
      dates: [],
      dateOffSet: 0,
    }
  },
  methods: {
    getDates() {
      var dates = []
      var date = new Date()
      date.setDate(date.getDate() + this.dateOffSet)
      var day = date.getDay()
      for(let i = 0; i<7; i++) {
        dates.push([this.week[(day + i-1) % 7], date])
        date = this.getDateAfter(date)
      } 
      return dates;
    },
    getDateAfter(currentDate) {
      var newDate = new Date();
      newDate.setTime(currentDate.getTime() + 1000*60*60*24);
      return newDate
    },
    changeDateOffset(offset) {
      this.dateOffSet = this.dateOffSet + offset
      this.dates = this.getDates()
    },
    reset() {
      this.dateOffSet = 0;
      this.dates = this.getDates()
    }
  },
  mounted() {
    this.dates = this.getDates()
  }
}
</script>

<style scoped>

</style>