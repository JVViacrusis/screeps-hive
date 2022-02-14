var workerMiner = {
    run: function(creep, sources){
        var targetSource = sources[creep.memory.targetSourceIndex];
        if(creep.harvest(targetSource) == ERR_NOT_IN_RANGE){
            creep.moveTo(targetSource);
        }
    }
}


module.exports = workerMiner;
