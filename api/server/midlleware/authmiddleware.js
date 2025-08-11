const jwt = require ('jsonwebtoken');


const authmiddleware =(req,res,next)=>{


    const token =['authorization'];
    if (!token) res.status(400).json({error: 'no token found'});
    jwt.verify(token,process.env.JWT_Token,(err,decode)=>{
        if(err) return res.status(401).json({error: 'invalid token'})
            req.userid=decode.id;

        rext();
    });
};

module.exports=authmiddleware;