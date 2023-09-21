const express = require('express')
const axios = require("axios")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.sendFile('index.html', { root: __dirname })
})
app.get('/searchwood', (req, res) => {
  // res.send('Hello World!')
  console.log(req.query)
  //   var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
    params: { word:req.query.word},
    headers: {
      'X-RapidAPI-Key': '4438240077msh26af3f73a3f08bfp1a0ed1jsne2c00cd14a20',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    res.json(response.data)

  }).catch(function (error) {
    console.error(error);
    // console.log(response.data)
    // res.json(response.data)
  });
  // response={
  //            word: 'ridiculous',
  //            definition: '1. Fitted to excite ridicule; absurd and laughable; unworthy of serious consideration; as, a ridiculous dress or behavior. Agricola, discerning that those little targets and unwieldy glaives ill pointed would soon become ridiculous against the thrust and close, commanded three Batavian cohorts . . . to draw up and come to handy strokes. Milton. 2. Involving or expressing ridicule. [r.] [It] provokes me to ridiculous smiling. Shak. Syn. -- Ludicrous; laughable; risible; droll; comical; absurd; preposterous. See Ludicrous. --- Ri*dic"u*lous*ly, adv. -- Ri*dic"u*lous*ness, n.',
  //            valid: true
  // }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})