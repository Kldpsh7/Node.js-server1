const http=require('http')
const server=http.createServer((req,res)=>{
    let url=req.url;
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>First html Page</title></head>');
    if (url=='/' || url=='/home'){
        res.write('<body><h1 style="text-align:center; color:green">Welcome to Home Page</h1></body>');
    }
    else if (url=='/about'){
        res.write('<body><h1 style="text-align:center; color:green">Welcome to About-Us Page</h1></body>');
    }
    else if (url=='/node'){
        res.write('<body><h1 style="text-align:center; color:green">Welcome to Node JS Project</h1></body>');
    }
    res.write('</html>');
    res.end();
});
server.listen(4000)