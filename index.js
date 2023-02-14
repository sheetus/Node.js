const http=require('http')
const fs=require('fs');
let products=fs.readFileSync('products.json');
products=JSON.parse(products);

  const server=http.createServer(function( request,response){
    let products=fs.readFileSync('products.json');
    // products=JSON.parse(products);
let url=request.url.split('/');
if(url[1]=='home')
{
response.write('<h1>welcome to home Page</h1>');
}
else if(url[1]=='products'){

    
    response.write(products);
  
  
}


else{
  response.writeHead(404);
  response.write("<h1> page not found</h1>")
}


response.end()


  });

  server.listen("5005",function(){
    console.log('hello');
})
