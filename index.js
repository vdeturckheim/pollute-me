'use strict';
const CP = require('child_process');
const Express = require('express');
const Hoek = require('hoek');
const Path = require('path');

const app = Express();
app.use(Express.json());


app.post('/update', (req, res) => {
    const defaults = { hello: 'world' };
    const result = Hoek.merge(defaults, req.body);
    return res.json(result);
});

app.get('/compute', (req, res) => {
    console.log(process.env.NODE_OPTIONS);
    const { stdout, stderr } = CP.spawn(process.execPath, [Path.join(__dirname, 'longTask.js')])
    stderr.on('data', (d) => console.log(d.toString()));
    stdout.pipe(res)
});

app.listen(7777, () => {
    console.log('listening on port 7777');
});




