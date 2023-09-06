const http=require('http')
const server=http.createServer((req,res)=>{
    let url=req.url;
    if (url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>First html Page</title></head>');
        res.write('<body><form action="/message" method="post" ><input type="text" name="message" placeholder="Enter Message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>First html Page</title></head>');
        res.write('<body><h1 style="text-align:center; color:green">Welcome to message Page</h1></body>');
        res.write('</html>');
        return res.end();
    }

});
server.listen(4000)