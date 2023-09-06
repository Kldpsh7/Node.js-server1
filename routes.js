const fs=require('fs')  //module to work with file system

const requestHandler=(req,res)=>{
    let url=req.url;
    let method=req.method;
    
    if (url==='/'){
        async function home(){
        let fileContent=await new Promise((resolve,reject)=>{
            resolve(fs.readFileSync('message.txt'))
        })
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>First html Page</title></head>');
        res.write(`<body style="text-align:center; color:teal;"><h1>${fileContent}</h1><form action="/message" method="POST" ><input type="text" name="message" placeholder="Enter Message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
        }
        home()
    }
    if(url=='/message' && method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            fs.writeFile('message.txt',parsedBody.split('=')[1],()=>{
                res.statusCode=302;
                res.setHeader('location','/')
                res.end();
            });
        })
    }
}
/*
module.exports = {
    handler:requestHandler,
    Key:'Some Key'
}
module.exports.handler=requestHandler
module.exports.Key='Some Key'
*/
exports.handler=requestHandler
exports.Key='Some Key'