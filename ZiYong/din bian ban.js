let igont = [`constantan`, `signalum`, `lumium`, `enderium`,];
//把应该可以通过格雷科技卷板机变成板的锭，重新添加上去。
ServerEvents.recipes(r => {
    function DingToBang(metal) {
        r.recipes.gtceu.bender(`gtceu:${metal}_ingot_to_plate`)
            .itemInputs(`alltheores:${metal}_ingot`)
            .itemOutputs(`alltheores:${metal}_plate`)
            .circuit(1)
            .duration(20)
            .EUt(32);
    }
    for (let metal of igont) { DingToBang(metal) }
})
