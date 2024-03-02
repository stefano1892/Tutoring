const date = new Date()

date.getFullYear()
date.getMonth()
date.getDate()
date.getHours()
date.getMinutes()
date.getSeconds()
date.getMilliseconds()
date.toISOString() // 2024-01-23T20:49:45.666Z

new Intl.DateTimeFormat('en-US').format(date) // '1/23/2024'
new Intl.NumberFormat('it-IT').format(32.24) // '32,24'
new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(32.24) // '32,24 €'