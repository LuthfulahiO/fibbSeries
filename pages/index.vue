<template>
  <div class="container">
    <div>
      <h1 class="title">
        fibbSeries
      </h1>
      <div class="inputs">
        <label for="max">Enter max</label>
        <input v-model="max" type="number" name="max">
        <label for="next">Enter a random number</label>
        <input v-model="next" type="number" name="next">
      </div>
      <div v-show="isAdd" class="feedbacks">
        <div v-if="success" class="success">
          <h4>Correct Number</h4>
        </div>
        <div v-else class="error">
          <h4>Wrong number</h4>
        </div>
      </div>
      <div class="actions">
        <div v-show="!isfromAdd">
          <h2>{{ result }}</h2>
        </div>
        <span class="button--grey" @click="addNumber(next)">Add</span>
        <span class="button--green" @click="runFibb(max)">Submit</span>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  data() {
    return {
      success: true,
      isAdd: false,
      max: '',
      next: '',
      result: '',
      isfromAdd: false
    }
  },
  computed: {
    series() {
      return this.$store.state.series
    }
  },
  methods: {
    addNumber(n) {
      if (this.max === '') {
        alert('Enter a maximum number')
      } else {
        this.runFibb(this.max)
        this.isfromAdd = true
        if (n === '') {
          alert('Enter random number')
        } else {
          this.isAdd = true
          this.success = this.series.includes(Number(n))
        }
      }
    },
    runFibb(n) {
      if (n === '') {
        window.alert('Enter a maximum number')
      } else {
        this.isfromAdd = false
        this.isAdd = false
        const result = [0, 1]
        for (let i = 2; i < n; i++) {
          if (result[i - 2] + result[i - 1] > n) {
            break
          }
          result.push(result[i - 2] + result[i - 1])
        }
        this.$store.commit('add', result)
        this.result = result.join(',')// or result[n-1] if you want to get the nth term
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
input {
  display: block;
  width: 80%;
  margin: auto;
  height: 50px;
  border: 1px solid black;
  font-size: 20px;
}
label {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5em;
  color: #35495e;
  letter-spacing: 1px;
}
.actions {
  padding-top: 15px;
}
.success {
  color: green;
  background-color: #fff;
}
.error {
  color: red;
  background-color: #fff;
}
</style>
