const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const { promisify } = require('util')
const docId = '1f7UznepF4rX43WDiYfUXHnpKqEs5w_fVOuu1IZhEO8M'

const accessSheet = async() =>{
    const doc = new GoogleSpreadsheet(docId)
    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)()
    const worksheet = info.worksheets[0]
    const rows = await promisify(worksheet.getRows)({
    })
  
    rows.forEach(row =>{
      console.log(row.nome)
  
    })
  
}
<<<<<<< HEAD

=======
>>>>>>> master
function clickButton(){

  accessSheet()

  
}

<<<<<<< HEAD
clickButton()

//para rodar esse codigo abra o terminal e digite "node index.js"
=======
clickButton()
>>>>>>> master
