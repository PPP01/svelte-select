<script>
    import Select from '$lib/Select.svelte';

    let items = [
        { value: 1, label: 'Name 1' },
        { value: 2, label: 'Name 2' },
        { value: 3, label: 'Name 3' },
        { value: 4, label: 'ABCD' },
        { value: 5, label: 'Ame 1' },
        { value: 6, label: 'Meeee' },
    ];

    /**
     * Filters and sorts an array of objects based on a provided filter text.
     *
     * The function sorts the array primarily by the position of the filter text within the `label` property.
     * Items containing the filter text earlier in their label appear first. If the filter text is not found,
     * those items are placed after the ones that contain the filter text. Within the same position,
     * items are sorted alphabetically.
     *
     * @param {Array<{ label: string }>} unsorted - The array of objects to be filtered and sorted.
     * @param {string} filterText - The text to filter and sort the array by.
     * @returns {Array<{ label: string }>} A new array that is filtered and sorted based on the filter text.
     */
    const filterSortFunction = (unsorted, filterText) => {
        // Check if the input array is valid, not empty, and filter text is provided
        if (!Array.isArray(unsorted) || unsorted.length === 0 || !filterText) {
            return unsorted;
        }

        const lowerFilter = filterText.toLowerCase();

        // Return a new sorted array based on filter text position and then alphabetically
        return unsorted.slice().sort((a, b) => {
            const aLabel = a.label.toLowerCase();
            const bLabel = b.label.toLowerCase();

            const aIndex = aLabel.indexOf(lowerFilter);
            const bIndex = bLabel.indexOf(lowerFilter);

            // Primary comparison: Position of filter text in the label
            if (aIndex !== bIndex) {
                // Items without the filter text come after those with it
                if (aIndex === -1) return 1;
                if (bIndex === -1) return -1;
                return aIndex - bIndex;
            }

            // Secondary comparison: Alphabetical order
            return a.label.localeCompare(b.label);
        });
    };


</script>

<Select {items} filterSortBy={filterSortFunction} />
