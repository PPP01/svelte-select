<script>
    import Select from '$lib/Select.svelte';

    let items = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];

    const CssClassesOverwrite = {base: 'svelte-select myCustomClass'}
</script>
<h1>Example as Object</h1>
<Select {items} cssClassesOverwrite={CssClassesOverwrite} />

