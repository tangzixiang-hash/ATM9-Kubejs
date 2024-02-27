ServerEvents.recipes(r => {
    r.custom(
        {
            type: "create:mixing", //机械动力 混合搅拌
            ingredients:
                [
                    {
                        type: "forge:nbt",
                        item: "productivebees:configurable_comb",
                        nbt: { EntityTag: { type: "productivebees:hyper_experience" } } //资源蜜蜂的超经验蜜蜂
                    }
                ],
            results:
                [
                    { fluid: "create_enchantment_industry:hyper_experience", amount: 40 } //机械动力，附魔工业的超经验。
                ],
            heatRequirement: "superheated", //超级加热
/*            conditions:  //原始资源蜜蜂中的条件判断，我把它屏蔽了。
                [
                    { type: "forge:mod_loaded", modid: "create" },
                    { type: "forge:mod_loaded", modid: "create_enchantment_industry" }
                ]
*/                
        })
})