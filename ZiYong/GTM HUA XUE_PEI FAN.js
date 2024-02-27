ServerEvents.recipes(r => {
    r.recipes.gtceu.electrolyzer(`gregtech:binretoelevtrolyzer`)
    .inputFluids(
        Fluid.of('mekanism:brine', 1000),       //MEK盐水
    )
    .itemOutputs(`3x gtceu:sodium_hydroxide_dust`)
    .outputFluids(
        Fluid.of('gtceu:hydrogen', 1000),//格雷科技氢气
        Fluid.of('gtceu:chlorine', 1000),//格雷科技氯气
    )
    .duration(20)
    .EUt(30);

})