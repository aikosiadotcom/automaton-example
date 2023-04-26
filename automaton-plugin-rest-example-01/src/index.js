import Automaton, { Decorators } from "@aikosia/automaton-core";

class AutomatonPluginRestExample01 extends Automaton{
    constructor(){
        super({key:"AutomatonPluginRestExample01"});
    }

    async print({name}){
        return `Hello, example-01`;
    }
}

export default AutomatonPluginRestExample01;