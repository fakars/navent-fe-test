export const addThousandSeparator = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const daysFromDateToNow = date => {
  const dateArray = date.split('/')
  const publishDate = new Date(
    parseInt(dateArray[2]),
    parseInt(dateArray[1]),
    parseInt(dateArray[0])
  )
  const today = new Date()
  const calculatedDate = Math.ceil(
    (today.getTime() - publishDate.getTime()) / 86400000 - 1
  ).toString()
  return calculatedDate
}

export const renderPlan = plan => {
  if (plan) {
    switch (plan) {
      case 'SUPERHIGHLIGHTED':
        return 'Super destacado'
      case 'HIGHLIGHTED':
        return 'Destacado'
      case 'SIMPLE':
        return 'Simple'
      default:
        return ''
    }
  }
}
