ServerEvents.recipes(event => {
    // 把铱粉通过熔炉烧制成铱锭
    event.smelting('alltheores:iridium_ingot', 'alltheores:iridium_dust')
})
