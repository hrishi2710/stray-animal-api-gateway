const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9997;
const reactUiDir = path.resolve(__dirname,'../stray-animal-frontend/build');
console.log(__dirname);
console.log(reactUiDir);

app.use(express.static(reactUiDir));

app.all('*', (req, res, next) => {
    res.sendFile('./index.html', {
        root : reactUiDir
    })
})

app.listen(port, () => {
    console.log (`Server is up on port ${port}`);
})
