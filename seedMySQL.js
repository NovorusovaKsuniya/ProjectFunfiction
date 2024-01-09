var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE fanf;'
var seedQuery = 'INSERT INTO fanf (title, nick, avatar, about) VALUES("Что такое Фанфик?", "WIF", "/images/Фан.jpg", "Фанфик - это произведение, созданное с использованием элементов другого произведения (персонажей, мира, сюжетных приёмов и способов), которое обычно написано поклонниками на некоммерческой основе и автор которого публично заявляет о том, что оно является фанфиком по отношению к другому произведению."), ("Кефер", "Kefer", "/images/ЗФ.jpg", "Ещё один персонаж фанфика Хранительница снов. Мудрый и справедливый правитель. Ему были доверены два ключа от портала между измерениями. Он является возлюбленным главной героини и играет важную роль."), ("Каника", "Kanika", "/images/Фвнфик_Хс.jpg","Рассмотрим для примера фанфик Хранительница снов. Автор Фанфика вдохновлялся мультсериалом Египтус, а Каника является придуманным главным персонажем.");'
var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : '1234',
database: 'fanfic'
});
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
