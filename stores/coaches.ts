export const useCoachesStore = defineStore('coaches', {

  state: () => ({
    allRecords: [],
  }),
  getters: {
    allData: state => state.allRecords,
  },
  actions: {

    async setAllData(payload: any) {
      // console.warn('payload', payload);
      this.allRecords = payload
    }
  },
})