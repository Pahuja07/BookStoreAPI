exports.loggermiddleware=function(req,res,next){
    console.log("logged");
    next();
};