export function updateSelectedColumn(column='') {
  return {
    type: 'UPDATE_SELECTEDCOLUMN',
    payload: column
  }
}
