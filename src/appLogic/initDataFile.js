import sets from './sets';
import data from './data';

function initData(){
    var initedSets = sets();
    data.eSet = initedSets.eSet;
    data.fSet = initedSets.fSet;
    data.uSet = initedSets.uSet;
    data.mSet = initedSets.mSet;
}

export default initData;