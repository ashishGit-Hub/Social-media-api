module.exports.home = function(req,res){
    return res.status(200).json({
        'message':'Express is up for codeial'
    });
}

module.exports.saveUser = function(req,res){
    return res.status(200).json({
        'message':'User saved'
    });
}