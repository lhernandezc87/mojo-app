export function updateSortDirection(direction='Desc') {
  return {
    type: 'UPDATE_SORTDIRECTION',
    payload: direction
  }
}
