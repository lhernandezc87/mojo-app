export function updateSelectedDateColumn(column='') {
  return {
    type: 'UPDATE_SELECTEDDATECOLUMN',
    payload: column
  }
}
