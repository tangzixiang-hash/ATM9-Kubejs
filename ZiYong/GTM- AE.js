ServerEvents.recipes(event => {
    /*
用于修改ATM9中的格雷科技相关的配方
以下是压模器.gtceu.extruder配方说明
    event.recipes.gtceu.extruder('ae2:calculation_processor_print')         //使用的配方id是AE2运算电路板的配方ID
        .itemInputs('64x ae2:certus_quartz_crystal')                        // itemInputs 表示输入的物品
        .notConsumable('ae2:calculation_processor_press')                   //.notConsumable表示不消耗的物品，比如说模具
        .itemOutputs('64x ae2:printed_calculation_processor')               //.itemOutputs 物品输出
        .duration(1280)                                                     //消耗的时间 以ttck为单位计算，1280就是64秒
        .EUt(32)                                                            //.EUt 每tick消耗的能量，也决定了使用这个配方的电压等级
    */
    //压模器 AE2运算电路板
    event.recipes.gtceu.extruder('ae2:calculation_processor_print')
        .itemInputs('64x ae2:certus_quartz_crystal')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('64x ae2:printed_calculation_processor')
        .duration(1200)
        .EUt(30)

    //压模器 AE2工程电路板
    event.recipes.gtceu.extruder('ae2:engineering_processor_print')
        .itemInputs('64x minecraft:diamond')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('64x ae2:printed_engineering_processor')
        .duration(1200)
        .EUt(30)
    //压模器 AE2逻辑电路板
    event.recipes.gtceu.extruder('ae2:logic_processor_print')
        .itemInputs('64x minecraft:gold_ingot')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('64x ae2:printed_logic_processor')
        .duration(1200)
        .EUt(30)
    //压模器 AE2硅板 
    event.recipes.gtceu.extruder('ae2:printed_silicon')
        .itemInputs('64x ae2:silicon')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('64x ae2:printed_silicon')
        .duration(1200)
        .EUt(30)
    //压模器 MEGA Cells 累加电路板 
    event.recipes.gtceu.extruder('megacells:printed_accumulation_processor')
        .itemInputs('64x megacells:sky_steel_ingot')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('64x megacells:printed_accumulation_processor')
        .duration(1200)
        .EUt(30)

    //组装机 AE2运算处理器
    event.recipes.gtceu.assembler('ae2:calculation_processor')
        .itemInputs('64x ae2:printed_calculation_processor', '64x ae2:printed_silicon', '64x minecraft:redstone')
        .itemOutputs('64x ae2:calculation_processor')
        .duration(1200)
        .EUt(30)

    //组装机 AE2 逻辑处理器
    event.recipes.gtceu.assembler('ae2:logic_processor')
        .itemInputs('64x ae2:printed_logic_processor', '64x ae2:printed_silicon', '64x minecraft:redstone')
        .itemOutputs('64x ae2:logic_processor')
        .duration(1200)
        .EUt(30)

    //组装机 AE2 工程处理器
    event.recipes.gtceu.assembler('ae2:engineering_processor')
        .itemInputs('64x ae2:printed_engineering_processor', '64x ae2:printed_silicon', '64x minecraft:redstone')
        .itemOutputs('64x ae2:engineering_processor')
        .duration(1200)
        .EUt(30)

    //组装机 MEGA Cells 累加处理器
    event.recipes.gtceu.assembler('megacells:accumulation_processor')
        .itemInputs('64x megacells:printed_accumulation_processor', '64x ae2:printed_silicon', '64x ae2:fluix_dust')
        .itemOutputs('64x megacells:accumulation_processor')
        .duration(1200)
        .EUt(30)

    //组装机 '@appflux' 红石分？ 
    event.recipes.gtceu.assembler(`appflux:assembler_redstone_crystal`)
        .itemInputs(
            `64x minecraft:redstone_block`,
            `64x ae2:fluix_dust`,
            `64x ae2:sky_dust`
        )
        .circuit(1)
        .itemOutputs(`64x appflux:redstone_crystal`)
        .duration(1200)
        .EUt(30);

    //压模器 '@appflux' 充能红石
    event.recipes.gtceu.extruder('appflux:extruder_assembler_redstone_crystal')
        .itemInputs('64x appflux:redstone_crystal')
        .notConsumable('appflux:energy_processor_press')
        .itemOutputs('64x appflux:printed_energy_processor')
        .duration(1200)
        .EUt(30);

    //组装机 '@appflux'能量处理器    
    event.recipes.gtceu.assembler(`appflux:assembler_energy_processor`)
        .itemInputs(
            `64x appflux:printed_energy_processor`,
            `64x minecraft:redstone`,
            `64x ae2:printed_silicon`
        )
        .circuit(1)
        .itemOutputs(`64x appflux:energy_processor`)
        .duration(20)
        .EUt(30);

})