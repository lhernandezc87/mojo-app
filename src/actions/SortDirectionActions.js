export function updateSortDirection(direction='') {
  return {
    type: 'UPDATE_SORTDIRECTION',
    payload: direction
  }
}
