export default function filter({
    loadOptions,
    filterText,
    items,
    multiple,
    value,
    itemId,
    groupBy,
    filterSelectedItems,
    itemFilter,
    convertStringItemsToObjects,
    filterSortBy,
    filterGroupedItems,
    label,
    createNewItems,
    addCreatableItem,

}) {
    if (items && loadOptions) return items;
    if (!items) return [];

    if (items && items.length > 0 && typeof items[0] !== 'object') {
        items = convertStringItemsToObjects(items);
    }

    let filterResults = items.filter((item) => {
        let matchesFilter = itemFilter(item[label], filterText, item);
        if (matchesFilter && multiple && value?.length) {
            matchesFilter = !value.some((x) => {
                return filterSelectedItems ? x[itemId] === item[itemId] : false;
            });
        }

        return matchesFilter;
    });


    if (typeof filterSortBy === 'function') {
        filterResults = filterSortBy(filterResults, filterText);
    }

    if (groupBy) {
        filterResults = filterGroupedItems(filterResults);
    }

    if (createNewItems) {
        filterResults = addCreatableItem(filterResults, filterText);
    }

    return filterResults;
}
