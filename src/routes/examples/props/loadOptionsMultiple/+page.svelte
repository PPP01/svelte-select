<script>
    import Select from '$lib/Select.svelte';

    let value = [];

    let items = [
        { value: 0, label: 'Aname 5' },
        { value: 1, label: 'name 1' },
        { value: 2, label: 'name 2' },
        { value: 3, label: 'name 3' },
        { value: 4, label: 'name 4' },
        { value: 5, label: 'name 5' },
        { value: 6, label: 'ABCD' },

    ];

    async function handleOptions(filterText) {
        console.log('handleOptions', filterText);
        if (filterText.length === 0) return [...items];
        const filtered = filterFunction(items, filterText);
        return filterSortFunction(filtered, filterText);
    }

    const filterFunction = (items, filterText) => {
        return items.filter((item) => item.label.toLowerCase().includes(filterText.toLowerCase()));
    }

    const filterSortFunction = (unsorted, filterText) => {
        if (unsorted.length > 0 && filterText.length > 0 && typeof unsorted.sort === 'function') {
            filterText = filterText.toLowerCase();
            unsorted.sort((tag1, tag2) => tag1.label.localeCompare(tag2.label));

            unsorted = unsorted.sort((tag1, tag2) => {
                let x = tag1.label.toLowerCase().indexOf(filterText);
                let y = tag2.label.toLowerCase().indexOf(filterText);
                return x === y ? 0 : x > y ? 1 : -1;
            });
        }

        return unsorted;
    }

    function handleClear(e)
    {
        console.log('handleClear', e.detail);
            (Array.isArray(e.detail) ? e.detail : [e.detail])
                .forEach(item => {
                    items = [...items, item];
                });
    }

    $: (()=>{
        if (Array.isArray(value) && value.length > 0) {
            items = items.filter(item => !value.some(selected => selected.value === item.value));
        }
    })(value);
    $: console.log('items', items);
</script>
<h1>Badabu</h1>

<Select loadOptions={handleOptions} multiple debounceWait="0" bind:value bind:items on:clear={handleClear} />
