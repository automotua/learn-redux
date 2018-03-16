const dailyActivities = (state = 100, action) => {
  switch (action.type) {
    case 'EAT':
      if (action.food.length > 6) {
        if (state > 95) {
          return 100;
        }
        return state + 5;
      } else {
        if (state < 5) {
          return 0;
        }
        return state - 5;
      }
    case 'SLEEP':
      if (state > 95) {
        return 100;
      }
      return state + 5;
    case 'BEAT':
      if (action.person.toLowerCase === 'dou dou') {
        if (state > 95) {
          return 100;
        }
        return state + 5;
      } else {
        if (state < 5) {
          return 0;
        }
        return state - 5;
      }
  }
}

export default dailyActivities
