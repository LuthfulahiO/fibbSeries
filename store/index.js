export const state = () => ({
  series: []
})

export const mutations = {
  add(state, newSeries) {
    state.series = newSeries
  }
}
