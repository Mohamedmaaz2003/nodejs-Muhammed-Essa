/* const dns = require('dns');

dns.lookup('www.google.com', (err, addresses,family)=>{
    console.log('Adresses : '+addresses);
    console.log('family : '+family);
    
}); */

/* const dns = require('dns');

dns.resolve4('www.lematin.ma', (err, addresses)=>{
    if(err) throw err;

    console.log(`Adresses :${JSON.stringify(addresses)} `);
    addresses.forEach((a)=>{
        dns.reverse(a, (err, hostnames)=>{
            if(err){
                throw err;
            }
            else{
                console.log(`reserve or ${a}:${JSON.stringify(hostnames)}`);
            } 
        });
    });
}); */

const dns = require('dns');
dns.lookupService('74.125.206.99', 22, (err, hostname, service)=>{
    console.log(hostname, service);
    
});