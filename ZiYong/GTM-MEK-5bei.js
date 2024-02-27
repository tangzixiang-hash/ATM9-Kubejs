//把MEK修改了，或者说是每个添加了一个变体。
let mek = ['iron', 'gold', 'osmium', 'copper', 'tin', 'lead', 'uranium']

function zhucemek(metal, r) {
    r.add(`mekanism:${metal}_crystal`, `mekanism:crystal_${metal}`);
    r.add(`mekanism:${metal}_shard`, `mekanism:shard_${metal}`);
    r.add(`mekanism:${metal}_clump`, `mekanism:clump_${metal}`);
    r.add(`mekanism:dirty_${metal}_dust`, `mekanism:dirty_dust_${metal}`);
    r.add(`mekanism:${metal}_dust`, `mekanism:dust_${metal}`);
}

ServerEvents.tags('item', r => {
    for (let metal of mek) {
        zhucemek(metal, r);
    }
})
// 定义一个变量metaslist 金属列表，来自3个模组，每个mod必须要具有能够被通用机械识别的的晶体，碎片，污浊的粉，和对应的粉。
let metalsList = {
    allthemodium: ['allthemodium', 'vibranium', 'unobtainium'],
    mekanism: ['iron', 'gold', 'osmium', 'copper', 'tin', 'lead', 'uranium'],
    alltheores: ['aluminum', 'nickel', 'platinum', 'silver', 'zinc', 'iridium']
}

// 开始注册内容到GTM中
ServerEvents.recipes(r => {
    function generateOreProcessingRecipes(mod, metal) {
        //使用化学反应釜 3个原矿变晶体
        let outputID = mod === 'mekanism' ? `#${mod}` : `${mod}`; // 根据条件生成输出物品的 mod 名称，MEK的统一加上#

        r.recipes.gtceu.chemical_reactor(`gregtech:3x_raw_${metal}_to_crystal`)
            .itemInputs(`3x #forge:raw_materials/${metal}`)
            .inputFluids(
                Fluid.of('gtceu:sulfuric_acid', 100),       //格雷科技硫酸
                Fluid.of('minecraft:water', 500),           //我的世界水
                Fluid.of('mekanism:hydrogen_chloride', 100) //MEK的氯化氢
            )
            .circuit(3) //在配方中添加一个电路，配方为3
            .itemOutputs(`10x ${outputID}:${metal}_crystal`)
            .duration(20)
            .EUt(32);
        //使用化学反应釜 9个原矿变晶体
        r.recipes.gtceu.chemical_reactor(`gregtech:9x_raw_${metal}_to_crystal`)
            .itemInputs(`9x #forge:raw_materials/${metal}`)
            .inputFluids(
                Fluid.of('gtceu:sulfuric_acid', 300),
                Fluid.of('minecraft:water', 1500),
                Fluid.of('mekanism:hydrogen_chloride', 300)
            )
            .circuit(9)
            .itemOutputs(`30x ${outputID}:${metal}_crystal`)
            .duration(60)
            .EUt(32);
        //使用化学浸洗机 处理1个晶体到碎片的过程
        r.recipes.gtceu.chemical_bath(`gregtech:1x_crystal_${metal}_to_shard`)
            .itemInputs(`1x ${outputID}:${metal}_crystal`)
            .inputFluids(
                Fluid.of('gtceu:oxygen', 200)
            )
            .itemOutputs(`1x ${outputID}:${metal}_shard`)
            .duration(20)
            .EUt(32)
        //使用化学浸洗机 处理9个晶体到碎片的过程
        r.recipes.gtceu.chemical_bath(`gregtech:9x_crystal_${metal}_to_shard`)
            .itemInputs(`9x ${outputID}:${metal}_crystal`)
            .inputFluids(
                Fluid.of('gtceu:oxygen', 1800)
            )
            .itemOutputs(`9x ${outputID}:${metal}_shard`)
            .duration(60)
            .EUt(32)
        //使用洗矿厂处理1个碎片到碎块
        r.recipes.gtceu.ore_washer(`gregtech:1x_shard_${metal}_to_clump`)
            .itemInputs(`1x ${outputID}:${metal}_shard`)
            .inputFluids(
                Fluid.of('minecraft:water', 100)
            )
            .circuit(1)
            .itemOutputs(`1x ${outputID}:${metal}_clump`)
            .duration(20)
            .EUt(32)
        //使用洗矿厂处理9个碎片到碎块
        r.recipes.gtceu.ore_washer(`gregtech:9x_shard_${metal}_to_clump`)
            .itemInputs(`9x ${outputID}:${metal}_shar`)
            .inputFluids(
                Fluid.of('minecraft:water', 900)
            )
            .circuit(9)
            .itemOutputs(`9x ${outputID}:${metal}_clump`)
            .duration(60)
            .EUt(32)
        //使用研磨机处理1个碎块到污浊的粉末
        r.recipes.gtceu.macerator(`gregtech:1x_clump_${metal}_to_dirty_dust`)
            .itemInputs(`1x ${outputID}:${metal}_clump`)
            .itemOutputs(`1x ${outputID}:dirty_${metal}_dust`)
            .duration(20)
            .EUt(32)
        //使用研磨机处理9个碎块到污浊的粉末
        r.recipes.gtceu.macerator(`gregtech:9x_clump_${metal}_to_dirty_dust`)
            .itemInputs(`9x ${outputID}:${metal}_clump`)
            .itemOutputs(`9x ${outputID}:dirty_${metal}_dust`)
            .duration(60)
            .EUt(32)
        //使用离心机处理1个污浊的粉末到粉末
        r.recipes.gtceu.centrifuge(`gregtech:1x_dirty_dust_${metal}_to_dust`)
            .itemInputs(`1x ${outputID}:dirty_${metal}_dust`)
            .itemOutputs(`1x ${outputID}:${metal}_dust`)
            .duration(20)
            .EUt(32)
        //使用离心机处理9个污浊的粉末到粉末
        r.recipes.gtceu.centrifuge(`gregtech:9x_dirty_dust_${metal}_to_dust`)
            .itemInputs(`9x ${outputID}:dirty_${metal}_dust`)
            .itemOutputs(`9x ${outputID}:${metal}_dust`)
            .duration(20)
            .EUt(32)
    }
    for (let mod of Object.keys(metalsList)) //遍历整个Metalslist（金属列表）键数组中的键，即allthemodium，gtceu，alltheores这些。
    {
        for (let metal of metalsList[mod]) //遍历选择出来的键对应的值，即模组的对应的金属。
        {
            generateOreProcessingRecipes(mod, metal) //执行对应函数。
        }
    }
})
//给氯化氢加上GTM的化学反应釜配方。
ServerEvents.recipes(r => {
    r.recipes.gtceu.chemical_reactor(`gregtech:hydrogen_chloride`)
        .inputFluids
        (
            Fluid.of('gtceu:chlorine', 500),
            Fluid.of('gtceu:hydrogen', 500),
        )
        .circuit(1) //在配方中添加一个电路，配方为3
        .outputFluids(Fluid.of('mekanism:hydrogen_chloride', 1000))
        .duration(20)
        .EUt(32);
})