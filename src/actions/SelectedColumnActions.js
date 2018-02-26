export function updateSelectedColumn(column='id') {
  return {
    type: 'UPDATE_SELECTEDCOLUMN',
    payload: column
  }
}
