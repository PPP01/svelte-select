<script>
    import Select from '$lib/Select.svelte';
    import _filter from '$lib/filter';

    let filterText = '';

    let value = null;

    const minAutoAddChars = 3;
    const addNew = false;

    let items = [
        { value: 0, label: 'Aname 5' },
        { value: 1, label: 'name 1' },
        { value: 2, label: 'name 2' },
        { value: 3, label: 'name 3' },
        { value: 4, label: 'name 4' },
        { value: 5, label: 'name 5' },
        { value: 6, label: 'ABCD' },

    ];

    function handleFilter(e) {
        if (e.detail.length === 0) {
            if (filterText.length >= minAutoAddChars) {
                const prev = items.filter((i) => !i.created);
                items = [...prev, { value: filterText, label: filterText, created: true }];
            }
        }
    }

    function handleChange(e) {
        items = items.filter((i) => i.created).map((i) => {
            delete i.created;
            return i;
        });
    }

    function handleBlur(e) {
        if (filterText.length >= 3) {
            value = value || [];
            value = [...value, { value: filterText, label: filterText }];
            handleChange(e);
        } else {
            items = items.filter((item) => !item.created);
        }
    }

    async function handleOptions(filterText)
    {
        if (filterText.length === 0) return [...items];
        const filtered = filterFunction(items, filterText);
        return filterSortFunction(filtered, filterText);
    }

    const filterFunction = (items, filterText) => {
        const lowerFilterText = filterText.toLowerCase().trim();
        let filtered = items.filter((item) => item.label.toLowerCase().includes(lowerFilterText));
        if (addNew && filterText.length >= minAutoAddChars) {
            // ggf. neuen Eintrag hinzufügen
            let addNew = false;
            addNew = filtered.length === 0 || filtered.some(item => item.label.toLowerCase() !== lowerFilterText);

            if (addNew) {
                let newItem = { value: filterText, label: filterText, created: true };
                filtered = [...filtered, newItem];
            }

        }
        return filtered;
    }

    const filterSortFunction = (unsorted, filterText) => {
        if (unsorted.length > 0 && filterText.length > 0 && typeof unsorted.sort === 'function') {
            filterText = filterText.toLowerCase();

            unsorted.sort((tag1, tag2) => {
                // Zuerst nach dem 'created' Attribut sortieren
                if (tag1.created && !tag2.created) return 1;    // tag1 kommt nach tag2
                if (!tag1.created && tag2.created) return -1;   // tag1 kommt vor tag2

                // Wenn beide gleich sind bezüglich 'created', dann nach Label sortieren
                const labelCompare = tag1.label.localeCompare(tag2.label);
                if (labelCompare !== 0) {
                    return labelCompare;
                }

                // Schließlich nach der Position des Filtertexts im Label sortieren
                const x = tag1.label.toLowerCase().indexOf(filterText);
                const y = tag2.label.toLowerCase().indexOf(filterText);
                return x - y;
            });
        }

        return unsorted;
    }


    function handleClear(e)
    {
        if (addNew) {
            (Array.isArray(e.detail) ? e.detail : [e.detail])
                .filter(item => item.created)
                .forEach(item => {
                    delete item.created;
                    items = [...items, item];
                });
        }
    }
/*
map((i) => {
            delete i.created;
            return i;
        });
 */
</script>

<h1>Test</h1>

<Select
    loadOptions={handleOptions}
    multiple

    on:clear={handleClear}
    bind:filterText
    bind:value
    debounceWait="0"
>
    <div slot="item" let:item>
        {item.created ? 'Add new: ' : ''}
        {item.label}
    </div>
</Select>
