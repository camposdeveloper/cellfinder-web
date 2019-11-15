const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require ('./credentials.json')
const { promisify } = require('util')
const docId = '1f7UznepF4rX43WDiYfUXHnpKqEs5w_fVOuu1IZhEO8M'

const accessSheet = async() => {
    const doc = new GoogleSpreadsheet(docId)
    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)()
    const worksheet = info.worksheets[0]
    return await promisify(worksheet.getRows)({
    
    })
}

var express = require('express');
app = express();

const path = require('path')

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    console.log("accessSheet...");
    accessSheet().then( rows => {
        console.log("response:");
        var row = rows[0].nome;
        var obj = {
            title: "Google Sheets",
            row: row
        }
        res.render('index', obj);
    })
});

var server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);