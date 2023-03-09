
module.exports = reqFilter = (req,res,next)=>{
    console.log('middlew ');
    if(!req.query.age){
         res.send('please provide age')
    }else if(req.query.age<18){
         res.send('you can not acces')
    }
    else{
         next();
    }

}