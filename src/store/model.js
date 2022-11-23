export function homeActiveSubroute(state = true, action) {
  switch (action.type) {
    case 'COUNT_work':
      return action.value;
    case 'JIANFA_work':
      return action.value
    default:
      return state;
  }
};

