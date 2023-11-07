export const iconPath = (item, navItem, fillIcon, outlineIcon) => {
    return item === navItem ? fillIcon : outlineIcon
}
export const handleActiveItem = (item, setItem) => {
    setItem(item)
}